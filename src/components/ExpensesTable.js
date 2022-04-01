import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { removeExpense } from '../actions';

class ExpensesTable extends Component {
  renderExpenses = () => {
    const { expenses, removeExpenseById } = this.props;
    return expenses.map(({ id, value, description, currency, method, tag,
      exchangeRates }) => {
      const coin = exchangeRates[currency].name;
      const exchangeRate = Number(exchangeRates[currency].ask).toFixed(2);
      const exchangeValue = (value * Number(exchangeRates[currency].ask)).toFixed(2);
      return (
        <tr key={ id }>
          <td>{ description }</td>
          <td>{ tag }</td>
          <td>{ method }</td>
          <td>{ Number(value).toFixed(2) }</td>
          <td>{ coin }</td>
          <td>{ exchangeRate }</td>
          <td>{ exchangeValue }</td>
          <td>Real</td>
          <td>
            <button
              type="button"
              className="btn btn-outline-info btn-sm"
            >
              Editar

            </button>
            <button
              type="button"
              data-testid="delete-btn"
              className="btn btn-outline-danger btn-sm"
              onClick={ () => removeExpenseById(id) }
            >
              Excluir

            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <table className="table-container table table-dark table-sm table-striped">
        <thead>
          <tr>
            <th className="description-column">Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th className="coin-column">Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          { this.renderExpenses() }
        </tbody>
      </table>
    );
  }
}

ExpensesTable.propTypes = {
  expenses: PropTypes.array,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpenseById: (id) => dispatch(removeExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
