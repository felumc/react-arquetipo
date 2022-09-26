//import logo from './logo.svg';
import './App.css';
//import Navegacion from './componentes/Navegacion';
import {Routes, Route} from 'react-router-dom';
import Inicio from './componentes/Inicio';
import Usuario from './componentes/Usuario';
import Layout from './componentes/Layout';
import RutaNoEncontrada from './componentes/RutaNoEncontrada'; 
import UsuarioDetalle from './componentes/UsuarioDetalle';

function App() { 
  //simular lista de usuarios recuperados desde API Rest 
  const usuarios = [ {id: '1', nombre: 'Harim Castellanos'}, 
  {id: '2', nombre: 'James Gosling'}, 
  {id: '3', nombre: 'Vitalik Buterin'}, 
  ]; 
  
  return ( 
    <> 
      <Routes> 
        <Route element={<Layout />}> 
        <Route index element={<Inicio />} /> 
        <Route path='/inicio' element={<Inicio />} /> 
        <Route path='/usuario' element={<Usuario usuarios={usuarios} />} > 
        <Route path='/usuario/:usuarioId' element={<UsuarioDetalle />} />
        </Route>
        <Route path='*' element={<RutaNoEncontrada />} /> 
        </Route> 
      </Routes> 
    </> 
  ); 
};

export default App;
