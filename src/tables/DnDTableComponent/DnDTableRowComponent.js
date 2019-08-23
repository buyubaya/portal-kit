/* eslint react/no-find-dom-node: "off" */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import { findDOMNode } from "react-dom";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./style.less";

const DragSource = require("react-dnd").DragSource;
const DropTarget = require("react-dnd").DropTarget;

// import constant from "../../constant";

const itemSource = {
    beginDrag(props) {
        // console.log("beginDrag", props);
        return {
            id: props.id,
            index: props.index,
            cells: props.cells,
            headers: props.headers,
        };
    },
};

const styles = StyleSheet.create({
    row_dragOver: {
        opacity: 0.3,
        backgroundColor: "#fcf8e3",
    },
    row_dragable: {
        cursor: "grabbing",
    },
});

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    };
}

function collectTarget(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
    };
}
let dragTimeout;
const itemTarget = {
    hover(props, monitor, component) {
        const dragIndex = monitor.getItem().index;
        const hoverIndex = props.index;

        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
            return;
        }

        // Determine rectangle on screen
        const hoverBoundingRect = findDOMNode(
            component,
        ).getBoundingClientRect();

        // Get vertical middle
        const hoverMiddleY = (hoverBoundingRect.bottom -
            hoverBoundingRect.top) /
            2;

        // Determine mouse position
        const clientOffset = monitor.getClientOffset();

        // Get pixels to the top
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;

        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%

        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
        }

        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
        }

        if (dragTimeout > 0) {
            clearTimeout(dragTimeout);
        }
        dragTimeout = setTimeout(
            function() {
                // Time to actually perform the action
                props.moveItem(dragIndex, hoverIndex);
                console.log("Move card ", dragIndex, hoverIndex);

                // Note: we're mutating the monitor item here!
                // Generally it's better to avoid mutations,
                // but it's good here for the sake of performance
                // to avoid expensive index searches.
                if (monitor.getItem()) {
                    monitor.getItem().index = hoverIndex; /* eslint no-param-reassign:"off" */
                }
            },
            150,
        );
    },
};

class DnDTableRowComponent extends Component {
    static propTypes = {
        cells: PropTypes.array.isRequired,
        readonly: PropTypes.bool,
        isDragging: PropTypes.bool,
        className: PropTypes.string,
        id: PropTypes.any,
        row: PropTypes.any,
        index: PropTypes.number.isRequired,
        headers: PropTypes.array.isRequired,
        connectDragSource: PropTypes.func.isRequired,
        connectDropTarget: PropTypes.func.isRequired,
        forceUpdate: PropTypes.bool,
    };
    constructor(props) {
        super(props);

        this.state = Object.assign({}, props);
    }
    // getInitialState() {
    //   return this.props;
    // }
    // componentDidMount: function() {
    //     if (src.split('.').pop() === 'mri') {
    //         console.log("componentDidMount ", findDOMNode(this));
    //     }
    // },

    shouldComponentUpdate = (nextProps, nextState) => {
        if (
            !this.props.row ||
            JSON.stringify(this.props.row) !== JSON.stringify(nextProps.row) ||
            this.props.isDragging !== nextProps.isDragging ||
            nextProps.forceUpdate
        ) {
            return true;
        }

        return false;
    };

    render() {
        // console.log("DnDTableRowComponent render");
        const { readonly, headers, cells } = this.props;
        // console.log(this.props);
        const connectDragSource = this.props.connectDragSource;
        const connectDropTarget = this.props.connectDropTarget;
        const className = [s["vertical-middle"]];
        if (this.props.isDragging) {
            className.push(css(styles.row_dragOver));
        }

        // const opacity = this.props.isDragging ? 0 : 1;
        // if (!readonly) {
        //     className.push()
        // }
        const result = (
            <tr className={this.props.className} key={this.props.id}>
                {!readonly
                    ? <td
                          key={"key-arrow-dragable"}
                          style={{ verticalAlign: "middle" }}
                          className={className.join(" ")}
                      >
                          <i
                              className={
                                  `glyphicon glyphicon-menu-hamburger ${css(styles.row_dragable)}`
                              }
                              aria-hidden="true"
                          />
                      </td>
                    : null}
                {cells.map((cell, i) => {
                    if (headers[i].hidden) {
                        return null;
                    }

                    return (
                        <td key={i} className={className.join(" ")}>{cell}</td>
                    );
                })}
            </tr>
        );

        if (readonly) {
            return result;
        }
        return connectDragSource(connectDropTarget(result));
    }
}

const dragSource = DragSource("DndTableRow", itemSource, collect)(
    DnDTableRowComponent,
);
const droppedTarget = DropTarget("DndTableRow", itemTarget, collectTarget)(
    dragSource,
);
export default withStyles(s)(droppedTarget);
