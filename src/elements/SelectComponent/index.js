/* eslint react/no-string-refs:"off" */

import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
// let Select = require('../../../3rd_modules/react-select/src/Select');
// let Creatable = require('../../../3rd_modules/react-select/src/Creatable');
// let AsyncCreatable = require('../../../3rd_modules/react-select/src/AsyncCreatable');
// import Select from "../../../3rd_modules/react-select/src/Select";
// import Creatable from "../../../3rd_modules/react-select/src/Creatable";
// import AsyncCreatable
//     from "../../../3rd_modules/react-select/src/AsyncCreatable";

import Select, { Creatable, AsyncCreatable } from "react-select"

import s from "./style.keepOriginalLess";

const classNames = require("classnames");

class SelectComponent extends Component {
    static propTypes = {
        // value: PropTypes.node,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.object,
            PropTypes.array,
        ]),
        className: PropTypes.string,
        allowCreate: PropTypes.bool,
        loadOptions: PropTypes.func,
        valueRenderLabelStyle: PropTypes.string,
        controlFullHeght: PropTypes.object,
        onChange: PropTypes.func,
    };
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
        };
    }
    onChange = value => {
        // console.log(value);
        if (value === null) value = undefined;
        this.setState({ value });
        this.props.onChange(value);
    };
    componentWillReceiveProps(nextProps) {
        this.setState({ value: nextProps.value });
    }
    render() {
        // let {value, loadOptions, allowCreate = false, onChange, ...other } = this.props;
        // const { value } = this.state;
        const {
            value,
            loadOptions,
            allowCreate = false,
            valueRenderLabelStyle = false,
            controlFullHeght = false,
            className,
            ...other
        } = this.props;

        const classnames = classNames(className, {
            "value-label-style-renderer": valueRenderLabelStyle,
            "select-control-full-height": controlFullHeght,
        });

        other.onChange = this.onChange;
        other.className = classnames;

        if (loadOptions) {
            other.loadOptions = loadOptions;
            if (allowCreate) {
                return (
                    <AsyncCreatable
                        ref="react_select"
                        {...other}
                        value={this.state.value}
                    />
                );
            }
            return (
                <Select.Async
                    ref="react_select"
                    {...other}
                    value={this.state.value}
                />
            );
        }

        // console.log(typeof element)
        if (allowCreate) {
            return <Creatable {...other} value={this.state.value} />;
        }

        return <Select {...other} value={this.state.value} />;
    }
}

SelectComponent.defaultProps = { onChange: () => {} };

export default withStyles(s)(SelectComponent);
