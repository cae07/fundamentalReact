import React, { Component} from 'react';

class Aniversario extends Component {
  render() {
    const { handleChange, value } = this.props;

    return (
      <input
        onChange={ handleChange }
        name='aniversario'
        type='date'
        value={ value }
      />
    )
  }
}

export default Aniversario;
