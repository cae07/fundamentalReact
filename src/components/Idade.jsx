import React, { Component} from 'react';
import PropTypes from 'prop-types';

class Idade extends Component {
  render() {
    const { handleChange, value } = this.props;
    
    console.log('estamos no filho', value);

    return (
      <input
      onChange={ handleChange }
      name='idade'
      type='number'
      value={ value }
    />
    )
  }
}

Idade.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string
}

export default Idade;
