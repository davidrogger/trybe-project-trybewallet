import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { removeExpense, activeEditButton, disableEditButton } from '../actions';

class ExpensesTable extends Component {
  pressEditBtn =async (expense) => {
    const { activeEdition, disableEdition, editBtn, getEditState } = this.props;

    if (editBtn) {
      disableEdition();
    } else {
      await activeEdition(expense);
      getEditState();
    }
  }

  renderExpenses = () => {
    const { expenses, removeExpenseById, expenseSelected = { id: 'none' } } = this.props;
    return expenses.map((expense) => {
      const { id, value, description, currency, method, tag,
        exchangeRates } = expense;
      const coin = exchangeRates[currency].name;
      const exchangeRate = Number(exchangeRates[currency].ask).toFixed(2);
      const exchangeValue = (value * Number(exchangeRates[currency].ask)).toFixed(2);

      return (
        <tr key={ id } className={ expenseSelected.id === id ? 'table-active' : '' }>
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
              data-testid="edit-btn"
              className="btn btn-outline-info btn-sm"
              onClick={ () => this.pressEditBtn(expense) }
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
      <table className="table-container table table-dark table-sm table-hover">
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
  expenseSelected: state.wallet.expenseSelected,
  editBtn: state.wallet.editBtn,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpenseById: (id) => dispatch(removeExpense(id)),
  activeEdition: (id) => dispatch(activeEditButton(id)),
  disableEdition: () => dispatch((disableEditButton())),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
