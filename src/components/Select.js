import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  selectList = (itemList, name) => itemList.map((item, index) => (
    <option
      key={ `${index}-${item}` }
      value={ item }
      name={ name }
    >
      {item}

    </option>
  ))

  render() {
    const { name, value, onChange, options, placeholder } = this.props;
    return (
      <div className="form-floating  m-1">
        <select
          data-testid={ `${name}-input` }
          id={ `${name}-id` }
          className="form-select"
          name={ name }
          value={ value }
          onChange={ onChange }
        >
          {this.selectList(options, name)}
        </select>
        <label htmlFor={ `${name}-id` }>
          { placeholder }
        </label>
      </div>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.string,
  placeholder: PropTypes.string,
}.isRequired;

export default Select;
