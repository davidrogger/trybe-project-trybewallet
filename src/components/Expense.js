import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { fetchAPI } from '../actions';

import Input from './Input';
import Select from './Select';

const METHODS = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const CATEGORIES = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Expense extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  inputHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  sentExpenseToStore = () => {
    const { addExpenses } = this.props;

    addExpenses('exchangeRates', this.state);

    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: '',
      description: '',
    }));
  }

  editExpenseToStore = () => {
    console.log('edit');
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies, editBtn } = this.props;
    return (
      <div className="expense-container">
        <Input
          name="value"
          type="number"
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
          onClick={ editBtn ? this.editExpenseToStore : this.sentExpenseToStore }
        >
          {editBtn ? 'Editar' : 'Adicionar'}
          {' '}
          despesa

        </button>

      </div>
    );
  }
}

Expense.propTypes = {
  currencies: PropTypes.string,
  editBtn: PropTypes.bool,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  editBtn: state.wallet.editBtn,
});

const mapDispatchToProps = (dispatch) => ({
  addExpenses: (type, expense) => dispatch(fetchAPI(type, expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expense);
