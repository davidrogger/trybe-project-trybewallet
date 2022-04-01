import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { name, type, value, placeholder, onChange } = this.props;
    return (
      <div className="form-floating">
        <input
          data-testid={ `${name}-input` }
          name={ name }
          id={ `input-${name}` }
          className="form-control"
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
