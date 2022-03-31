import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { name, type, value, placeholder, onChange } = this.props;
    return (
      <div className="form-floating mb-3">
        <input
          data-testid={ `${name}-input` }
          name={ name }
          id={ `input-${name}` }
          className="input-user form-control form__input"
          type={ type }
          placeholder={ placeholder }
          onChange={ onChange }
          value={ value }
        />
        <label htmlFor={ `input-${name}` }>{ placeholder }</label>
      </div>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
}.isRequired;

export default Input;
