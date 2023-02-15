import React, { Component} from 'react';

class CheckBox extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label>
      digite uma cidade
      <input
        onClick={ handleChange }
        name='isValid' type='checkbox'
      />
    </label>
    )
  }
}

export default CheckBox;
