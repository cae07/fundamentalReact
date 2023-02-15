import React, { Component} from 'react';

class Nome extends Component {
  render() {
    const { handleChange, value } = this.props;

    return (
      <input
      onChange={ handleChange }
      name='nome'
      type='text'
      value={ value }
    />
    )
  }
}

export default Nome;
