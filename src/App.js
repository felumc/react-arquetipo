//import logo from './logo.svg';
import './App.css';
import Navegacion from './componentes/Navegacion';
import {Routes, Route} from 'react-router-dom';
import Inicio from './componentes/Inicio';
import Usuario from './componentes/Usuario';


function App() {
  return (
    <>
      <h3>Arquetipo de Aplicacion React</h3>
      <Navegacion/>

      <Routes>
      <Route path='/inicio' element={<Inicio />} />
      <Route path='/usuario' element={<Usuario />} />
      </Routes>
    </>
    
  );
}

export default App;
