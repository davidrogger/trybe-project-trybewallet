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

  selectList = (itemList, name) => {
    return itemList.map((item, index) => (
      <option
        key={ `${index}-${item}` }
        value={ item }
        name={ name }
      >
        {item}

      </option>
    ));
  }

  render() {
    const { value, description, currencie, method, category } = this.state;
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

        <select
          name="currencie"
          value={ currencie }
          onChange={ this.inputHandler }
        >
          {this.selectList(currencies, 'currencie')}
        </select>

        <Input
          name="description"
          type="text"
          placeholder="Descrição"
          onChange={ this.inputHandler }
          value={ description }
        />

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
