import React from 'react';
import '../styles/login.css';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import getUserEmail from '../actions';

import Input from '../components/Input';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      btnDisabled: true,
    };
  }

  inputValidation = () => {
    const { email, password } = this.state;

    const passwordMinLength = 6;

    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g; // fonte regex https://regexr.com/3e48o

    const emailTest = regex.test(email);
    const passwordTest = password.length >= passwordMinLength;

    this.setState({ btnDisabled: !(emailTest && passwordTest) });
  }

  inputHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.inputValidation());
  }

  loginHandler = () => {
    const { history, sentEmail } = this.props;
    const { email } = this.state;
    sentEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, btnDisabled } = this.state;
    return (
      <div className="login-container">

        <h1>TrybeWallet</h1>

        <div>
          <Input
            name="email"
            type="Text"
            placeholder="Email"
            onChange={ this.inputHandler }
            value={ email }
          />

          <Input
            name="password"
            type="password"
            placeholder="Password"
            onChange={ this.inputHandler }
            value={ password }
          />

          <div className="d-grid col-6 mx-auto">
            <button
              type="button"
              className="btn btn-warning btn-lg"
              onClick={ this.loginHandler }
              disabled={ btnDisabled }
            >
              Entrar

            </button>

          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  sentEmail: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  sentEmail: (email) => dispatch(getUserEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
