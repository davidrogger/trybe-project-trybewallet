import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { fetchAPI } from '../actions';

import Header from '../components/Header';
import Expense from '../components/Expense';

class Wallet extends React.Component {
  componentDidMount() {
    const { getApiResponse } = this.props;
    getApiResponse();
  }

  render() {
    // const { email } = this.props;
    // const logged = email.length === 0;

    return (
      <div>
        <Header />
        <Expense />
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

const mapDispatchToProps = (dispatch) => ({
  getApiResponse: () => dispatch(fetchAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
