import React, { Component } from "react";
import PropTypes from "prop-types";

import { DragDropContext } from "react-dnd";
// import { DragSource, DropTarget } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import DnDTableRowComponent from "./DnDTableRowComponent";

import s from "./style.less";

// import constant from "../../constant";

const classNames = require("classnames");

class DnDTableComponent extends Component {
    static propTypes = {
        rowsData: PropTypes.array.isRequired,
        headers: PropTypes.array.isRequired,
        readonly: PropTypes.bool,
        rowKey: PropTypes.string.isRequired,
        rowRenderer: PropTypes.func.isRequired,
        onValuesChanged: PropTypes.func,
        className: PropTypes.string,
        forceUpdate: PropTypes.bool,
    };

    constructor(props) {
        super(props);
        this.rowCacheData = {};
    }
    onRowClick = () => {
        console.log("row clicked");
    };
    moveItem = (dragIndex, hoverIndex) => {
        if (this.props.readonly) {
            return;
        }

        const { rowsData } = this.props;
        const dragItem = rowsData[dragIndex];

        rowsData.splice(dragIndex, 1);
        rowsData.splice(hoverIndex, 0, dragItem);

        this.fireOnValuesChanged(rowsData);
    };

    rowCacheData = {};

    fireOnValuesChanged = (items = null) => {
        // console.log("_fireOnValuesChanged ", items);
        if (!items) {
            this.props.onValuesChanged(this.state.rowsData);
        } else {
            this.props.onValuesChanged(items);
        }
    };

    render() {
        // console.log("DnDTableComponent render");
        const classname = classNames("table", {}, this.props.className);

        const {
            headers,
            rowsData,
            rowRenderer,
            readonly,
            rowKey,
        } = this.props || [];

        return (
            <table className={classname}>
                <thead>
                    <tr>
                        {!readonly ? <th /> : null}
                        {headers &&
                            headers.map((header, i) => {
                                if (header.hidden) {
                                    return null;
                                }

                                return (
                                    <th
                                        key={i}
                                        className={header.className}
                                        onClick={header.onClick}
                                    >
                                        {header.value}
                                        {" "}
                                        {header.sort_icon}
                                        {" "}
                                        {header.sub_component}
                                    </th>
                                );
                            })}
                    </tr>
                </thead>
                <tbody>
                    {rowsData &&
                        rowsData.map((row, i) => {
                            const rKey = row[rowKey];
                            let rowCells = this.rowCacheData[rKey];
                            if (
                                !rowCells ||
                                rowCells.data !== JSON.stringify(row)
                            ) {
                                let cells = rowRenderer(row);
                                rowCells = {
                                    data: JSON.stringify(row),
                                };
                                if (!Array.isArray(cells)) {
                                    rowCells.cells = cells.cells;
                                    rowCells.className = cells.className || "";
                                } else {
                                    rowCells.cells = cells;
                                    rowCells.className = "";
                                }
                                this.rowCacheData[rKey] = rowCells;
                            }
                            //  else {
                            //   return this.rowCacheData[rKey].result;
                            // }

                            const { cells, className } = rowCells;
                            // this.rowCacheData[rKey].result = (
                            return (
                                <DnDTableRowComponent
                                    key={rKey}
                                    id={rKey}
                                    cells={cells}
                                    row={row}
                                    headers={headers}
                                    index={i}
                                    moveItem={this.moveItem}
                                    className={className}
                                    forceUpdate={this.props.forceUpdate}
                                />
                            );

                            // return this.rowCacheData[rKey].result;
                        })}
                </tbody>
            </table>
        );
    }
}

export const dragDropContext = DragDropContext(HTML5Backend);

export default withStyles(s)(dragDropContext(DnDTableComponent));
