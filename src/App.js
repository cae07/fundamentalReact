import React, { Component } from 'react';
import {
  Aniversario,
  CheckBox,
  Idade,
  Nome,
  SelectField
} from './components';

class App extends Component {
  state = {
    isValid: false,
    idade: '',
    nome: '',
    aniversario: '',
    carsTypes: 'Volvo'
  };

  handleChange = ({ target }) => {
    console.log('estamos no componente pai');
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <>
        <form>
          <CheckBox handleChange={ this.handleChange } />
          <Idade value={ this.state.idade } handleChange={ this.handleChange } />
          <Nome value={ this.state.nome } handleChange={ this.handleChange } />
          <Aniversario value={ this.state.aniversario } handleChange={ this.handleChange } />
          <SelectField handleChange={ this.handleChange } />
        </form>
      </>
    )
  }
}

export default App;
