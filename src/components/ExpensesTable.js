import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { removeExpense, activeEditButton } from '../actions';

class ExpensesTable extends Component {
  pressEditBtn = (id) => {
    const { activeEdition, editBtn } = this.props;

    if (editBtn) {
      console.log('não implementado ainda');
    } else {
      activeEdition(id);
    }
  }

  renderExpenses = () => {
    const { expenses, removeExpenseById, SelectedId } = this.props;
    return expenses.map(({ id, value, description, currency, method, tag,
      exchangeRates }) => {
      const coin = exchangeRates[currency].name;
      const exchangeRate = Number(exchangeRates[currency].ask).toFixed(2);
      const exchangeValue = (value * Number(exchangeRates[currency].ask)).toFixed(2);
      return (
        <tr key={ id } className={ SelectedId === id ? 'table-light' : '' }>
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
              onClick={ () => this.pressEditBtn(id) }
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
  SelectedId: state.wallet.expenseSelected,
  editBtn: state.wallet.editBtn,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpenseById: (id) => dispatch(removeExpense(id)),
  activeEdition: (id) => dispatch(activeEditButton(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
