import React, { Component} from 'react';

class SelectField extends Component {
  render() {
    const { handleChange } = this.props;

    return (
      <select
        name='carsTypes'
        onChange={ handleChange }
      >
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    )
  }
}

export default SelectField;
