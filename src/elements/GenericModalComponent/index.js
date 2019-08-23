/* eslint no-underscore-dangle:"off" */

import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import { Modal } from "react-bootstrap";

import s from "./style.less";

export function showModal(context, body, modalName, title = null, buttons = null, cancelable = true, size = "lg") {
  context.setState({
    ___modal: {
      name: modalName,
      show: true,
      body,
      title,
      buttons,
      cancelable,
      size,
      context,
    },
  });
}

export function getCurrentModalName(context) {
    // console.log(context, context.state);
  if (!context || !context.state) {
    return null;
  }

  const modal = context.state.___modal;
    // console.log(modal, context.state.___modal);
  if (!modal || !modal.show) {
    return null;
  }
  return modal.name;
}


export function hideModal(context, modalName = null) {
  if (!context || !context.state) {
    return;
  }

  if (modalName && getCurrentModalName(context) !== modalName) {
    return;
  }

  let modal = context.state.___modal;
  if (!modal) {
    modal = {
      show: false,
    };
  } else {
    modal.show = false;
  }
  context.setState({
    ___modal: modal,
  });
}

class GenericModalComponent extends Component {
  static propTypes = {
    state: PropTypes.object,
  }
  onHide = () => {
    const { state } = this.props;
    if (!state) {
      return null;
    }
    const modal = state.___modal;
    if (!modal.cancelable) {
      return null;
    }
    if (modal.context) {
      hideModal(modal.context);
    }
    return null;
  }
  render() {
    const { state } = this.props;
    if (!state) {
      return null;
    }
    const modal = state.___modal;
    if (!modal) {
      return null;
    }

    return (
      <Modal bsSize={modal.size ? modal.size : "lg"} show={modal.show} onHide={this.onHide}>
        <div className="modal-content">
          {modal.title ?
            <div className="modal-header">
              <button type="button" className="close" onClick={this.onHideImportLinks} aria-label="Close"><span aria-hidden="true">&times; </span></button>
              <h4 className="modal-title">{modal.title}</h4>
            </div> : null}
          <div className="modal-body">
            {modal.body}
          </div>
          {modal.buttons ?
            <div className="modal-footer">
              {modal.buttons}
            </div> : null}
        </div>
      </Modal>
    );
  }
}

export default withStyles(s)(GenericModalComponent);
