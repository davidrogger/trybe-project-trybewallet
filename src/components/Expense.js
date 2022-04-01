import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Input from './Input';

class Expense extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      description: '',
      currencie: 'USD',
      method: '',
      category: '',
    };
  }

  inputHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  currencieList = () => {
    const { currencies } = this.props;

    return currencies.map((currencie, index) => (
      <option
        key={ `${index}-${currencie}` }
        value={ currencie }
        name="currencie"
      >
        {currencie}

      </option>
    ));
  }

  render() {
    const { value, description, currencie, method, category } = this.state;
    return (
      <div className="expense-container">
        <Input
          name="value"
          type="text"
          placeholder="Valor"
          onChange={ this.inputHandler }
          value={ value }
        />

        <select
          name="currencie"
          value={ currencie }
          onChange={ this.inputHandler }>
          {this.currencieList()}
        </select>

      </div>
    );
  }
}

Expense.propTypes = {
  currencies: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Expense);
