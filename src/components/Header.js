import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <header className="header-container">
        <h1 className="main-title">
          TrybeWallet
        </h1>
        <div className="header-user-info">
          <span>
            Email:
            {' '}
            <strong data-testid="email-field">{ email }</strong>
          </span>
          <span>
            Despesa Total:
            {' '}
            <strong>
              R$:
              {' '}
              <span data-testid="total-field">0,00</span>
              <span data-testid="header-currency-field">BRL</span>
            </strong>
          </span>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);
