import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';

import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    // const { email } = this.props;
    // const logged = email.length === 0;

    return (
      <div>
        <Header />
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
