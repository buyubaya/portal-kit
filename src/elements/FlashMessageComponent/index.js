/* eslint  no-underscore-dangle:"off" */

import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./style.less";

import AlertComponent from "../AlertComponent";

let flashMesasges = [];

export function injectFlashMessage(entity) {
  entity.setState({ __flash: flashMesasges });
  flashMesasges = [];
}

export function setFlashMessage(_message, _type = "info", _dismiss = true) {
  flashMesasges.push({
    message: _message,
    type: _type,
    dismiss: _dismiss,
    index: new Date().getTime(),
  });
}

class FlashMessageComponent extends Component {
  static propTypes = {
    messages: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.element,
    ]),
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
    this.onCloseMessage = this.onCloseMessage.bind(this);
  }
  state = {
    messages: this.props.messages || {},
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      messages: nextProps.messages,
    });
  }
  onCloseMessage(index) {
    const listMessages = this.state.messages.__flash || [];
    listMessages.splice(index, 1);
    this.state.messages.__flash = listMessages;
    this.setState({
      messages: this.state.messages,
    });
  }
  render() {
    // var {messages} = this.props;
    const { messages } = this.state;
    let listFlashMessages = [];
    listFlashMessages = messages.__flash || [];
    if (!messages || listFlashMessages.length <= 0) {
      return <div />;
    }

    return (
      <div>
        {listFlashMessages.map((message, i) => (
          <AlertComponent
            key={i}
            content={message.message}
            type={message.type}
            dismiss={message.dismiss}
            onCloseAlert={() => this.onCloseMessage(i)}
          />
        ))}
      </div>
    );
  }
}

FlashMessageComponent.defaultProps = {};

export default withStyles(s)(FlashMessageComponent);
