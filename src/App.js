import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';

function App () {
  return (
    <Routes>
      <Route path="/" element={<Page1 />} />
      <Route path="/1" element={<Page2 />} />
      <Route path="/2" element={<Page3 />} />
      <Route path="/3" element={<Page4 />} />
    </Routes>
  )
}

// import './App.css';

// class App extends Component {
//   constructor() {
//     super()

//     this.state = {
//       caracters: []
//     }
//   }

//   fetchCaracters = () => {
//     console.log('Estou sendo chamado');
//     fetch('https://rickandmortyapi.com/api/character')
//       .then(response => response.json()
//       .then(({ results }) => this.setState({ caracters: results })))
//   }

//   componentDidMount() {
//     console.log('componentDidMount');
//     this.fetchCaracters()
//   }

//   componentDidUpdate() {
//     console.log('componentDidUpdate');
//   }

//   shouldComponentUpdate() {
//     console.log('shouldComponentUpdate');
//     return true;
//   }

//   render() {
//     console.log('render');
//     const { caracters } = this.state;
//     return (
//       <>
//         <h1>Personagens</h1>
//         {caracters.map(data => (
//           <div key={ data.name }>
//             <p>{ data.name }</p>
//             <img src={ data.image } alt={ data.name } />
//           </ div>
//         ))}
//       </>
//     );
//   }
// }

export default App;