import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

class ExpensesTable extends Component {
  renderExpenses = () => {
    const { expenses } = this.props;
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
      <table className="tabel-container table table-dark table-sm table-striped">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
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

export default connect(mapStateToProps)(ExpensesTable);
