import React, { Component } from 'react';

import Input from './Input';

class Expense extends Component {
  render() {
    return (
      <div className="expense-container">
        <Input
          name="value"
          type="text"
          placeholder="Valor"
          // onChange={ this.inputHandler }
          // value={ password }
        />
      </div>
    );
  }
}

export default Expense;
