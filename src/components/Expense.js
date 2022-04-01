import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Input from './Input';
import Select from './Select';

const METHODS = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const CATEGORIES = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Expense extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
  }

  inputHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <div className="expense-container">
        <Input
          name="value"
          type="text"
          placeholder="Valor"
          onChange={ this.inputHandler }
          value={ value }
        />

        <Select
          name="currency"
          value={ currency }
          onChange={ this.inputHandler }
          options={ currencies }
          placeholder="Moeda"
        />

        <Select
          name="method"
          value={ method }
          onChange={ this.inputHandler }
          options={ METHODS }
          placeholder="Pagamento"
        />

        <Select
          name="tag"
          value={ tag }
          onChange={ this.inputHandler }
          options={ CATEGORIES }
          placeholder="Categoria"
        />

        <Input
          name="description"
          type="text"
          placeholder="Descrição"
          onChange={ this.inputHandler }
          value={ description }
        />

        <button
          type="button"
          className="btn btn-warning"
        >
          Adicionar despesa

        </button>

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
