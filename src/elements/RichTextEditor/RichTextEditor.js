/* eslint

*/

import React from 'react';
import PropTypes from "prop-types";
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './RichTextEditor.less';
import snow from './Snow.keepOriginalLess';
import csClass from './customQuillEditor.keepOriginalLess';

var classNames = require('classnames');
var ReactQuill = null;
if (typeof document !== "undefined") {
    ReactQuill = require("react-quill");
}
// import ReactQuill from 'react-quill';
// require('../../../node_modules/quill/dist/quill.snow.css');


const toolbarOptions = [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],
    ['clean']
];

const moduleOptions = {
    toolbar: toolbarOptions
}
const formatOptions = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]

class RichTextArea extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        defaultValue: PropTypes.string,
        value: PropTypes.string,
        editable: PropTypes.bool,
        onInput: PropTypes.func
    }
    static defaultProps = {
        defaultValue: '',
        editable: true,
        className: "",
        onChange: (value) => {
            console.log(value)
        },
        onBlur: (e) => {},
    }
    constructor(props){
        super(props)

        this.state = {
            value: props.value,
        }
    }
    componentWillReceiveProps (nextProps, nextState){
        this.setState({
            value: nextProps.value
        })
    }
    onChange = (value) => {
        this.setState({value: value});
        this.props.onChange(value);
    }
    render(){
        var classname = classNames('rich-text-editor',s['wrapper-class'],this.props.className);

        return (
            <ReactQuill className={classname} 
            // theme="snow"
                    defaultValue={this.state.value}
                    value={this.state.value}
                    onChange={this.onChange}
                    readOnly={!this.props.editable}
                    //modules={moduleOptions}
                    //formats={formatOptions}
                    style={this.props.container_style}

                    placeholder={this.props.placeholder}
                    >
            </ReactQuill>
        )
    }
}

export default withStyles(snow, s, csClass)(RichTextArea);