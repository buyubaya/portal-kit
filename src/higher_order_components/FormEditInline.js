import React from "react";
import PropTypes from "prop-types";

export default function FormEditInlineTextInput(Component) {
  return class extends React.Component {
    static propTypes = {
      onSaveText: PropTypes.func,
      onCancelText: PropTypes.func,
    }
    constructor() {
      super();
      this.state = { editing: false };

      this.onEditTextClick = this.onEditTextClick.bind(this);
      this.onSaveText = this.onSaveText.bind(this);
      this.onCancelText = this.onCancelText.bind(this);
    }
    onEditTextClick() {
      this.setState({
        editing: true,
      });
    }
    onSaveText() {
      this.setState({
        editing: false,
      });
      if (this.props.onSaveText) {
        this.props.onSaveText();
      }
    }
    onCancelText() {
      this.setState({
        editing: false,
      });
      if (this.props.onCancelText) {
        this.props.onCancelText();
      }
    }
    render() {
      const { ...other } = this.props;

      const newProps = {
        editing: this.state.editing,
        onEditTextClick: this.onEditTextClick,
        onSaveText: this.onSaveText,
        onCancelText: this.onCancelText,
        ...other,
      };
      return <Component {...newProps} />;
    }
    };
}
