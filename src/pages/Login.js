import React from 'react';
import '../styles/login.css';

import Input from '../components/Input';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  loginHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="login-container">

        <h1>TrybeWallet</h1>

        <div>
          <Input
            data-testid="email-input"
            name="email"
            type="Text"
            placeholder="Email"
            onChange={ this.loginHandler }
            value={ email }
          />

          <Input
            data-testid="password-input"
            name="password"
            type="password"
            placeholder="Password"
            onChange={ this.loginHandler }
            value={ password }
          />

          <div className="d-grid col-6 mx-auto">
            <button
              type="button"
              className="btn btn-warning btn-lg"
              // disabled
            >
              Entrar

            </button>

          </div>
        </div>
      </div>
    );
  }
}

export default Login;
