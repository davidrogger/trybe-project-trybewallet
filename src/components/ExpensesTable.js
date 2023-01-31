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

      const expenseValues = [
        description, tag, method, Number(value).toFixed(2),
        coin, exchangeRate, exchangeValue, 'Real',
      ];

      return (
        <tr
          key={ id }
          className={ expenseSelected.id === id ? 'table-active table-sm' : 'table-sm' }
        >
          {expenseValues
            .map((expenseValue, index) => (<td key={ index }>{expenseValue}</td>))}
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
            {[
              'Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
              'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão',
              'Editar/Excluir',
            ]
              .map((headTitle) => (<th key={ headTitle }>{headTitle}</th>))}
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
