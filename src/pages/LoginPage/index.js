import React, { Component } from "react";
import PropTypes from "prop-types";

import withStyles from "isomorphic-style-loader/lib/withStyles";
import { FormGroup, Button } from "react-bootstrap";

import s from "./style.less";
import {
  SimpleButtonComponent,
  TextBoxComponent,
  SimpleCheckBoxComponent,
  AlertComponent,
} from "../../elements";

const classNames = require("classnames");

class LoginFormComponent extends Component {
  static propTypes = {
    title: PropTypes.string,
    error: PropTypes.string,
    className: PropTypes.string,
    onLogin: PropTypes.func,
    onRemember: PropTypes.func,
    onSignUp: PropTypes.func,
    onSubmit: PropTypes.func,
    onRememberClick: PropTypes.func,
    onForgotPassword: PropTypes.func,
  };
  constructor(props){
    super(props)

    this.state = {
      email: "",
      password: "",
    }
  }
  // getInitialState() {
  //   return {
  //     email: "",
  //     password: "",
  //   };
  // }
  onEmailChange = (email) => {
    this.setState({
      email,
    });
  }
  onPasswordChange = (password) => {
    this.setState({
      password,
    });
  }
  onLoginClick = (event) => {
    this.props.onLogin(event);
  }
  onRememberClick = () => {
    this.props.onRemember();
  }
  onSignUpClick = () => {
    console.log("sign up clicked");
    this.props.onSignUp();
  }
  onSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.onSubmit({ email, password });
  }
  render() {
    const classname = classNames(
      this.props.className,
      "text-center",
      s["account-form"],
      s["abs-middle-vertical-block"],
    );
    return (
      <div className={classname}>
        <h4>{this.props.title} </h4>
        {this.props.error !== ""
          ? <AlertComponent
            type="danger"
            content={this.props.error}
            dismiss={false}
            className={s["login-message"]}
          />
          : null}
        <form onSubmit={this.onSubmit}>
          <FormGroup>
            <TextBoxComponent
              name="email"
              value={this.state.email}
              size="large"
              placeholder="Email"
              type="email"
              required
              onChange={this.onEmailChange}
            />
          </FormGroup>
          <FormGroup>
            <TextBoxComponent
              name="password"
              value={this.state.password}
              size="large"
              placeholder="Password"
              type="password"
              required
              onChange={this.onPasswordChange}
            />
          </FormGroup>
          {this.props.onRemember
            ? <FormGroup>
              <SimpleCheckBoxComponent
                value="Remember me"
                onChange={this.props.onRememberClick}
              />
            </FormGroup>
            : null}
          <FormGroup>
            <Button
              block
              bsSize="lg"
              bsStyle="success"
              type="submit"
              onClick={this.onLoginClick}
            >
              Login
            </Button>
          </FormGroup>
          {this.props.onForgotPassword
            ? <FormGroup>
              <Button bsStyle="link" onClick={this.onForgotPassword}>
                  Forgot password ?
                </Button>
            </FormGroup>
            : null}
        </form>
        {this.props.onSignUp
          ? <SimpleButtonComponent
            block
            bsSize="lg"
            bsStyle="primary"
            onClick={this.onSignUp}
          >
              Sign Up
            </SimpleButtonComponent>
          : null}
      </div>
    );
  }
}

LoginFormComponent.defaultProps = {
  error: "",
  title: "Login to Portal",
  onSubmit: () => {},
  onLogin: () => {},
};

export default withStyles(s)(LoginFormComponent);
