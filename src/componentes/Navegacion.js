import { Link } from 'react-router-dom';

//El resultado lo vamos a recibir en () y lo que esta entre las {} es la funcion
const Navegacion = () => {
    return(
        <nav style={{borderBottom: 'solid 1px', paddingBottom: '1rem'}}>
            <Link to="/inicio" style={{padding: '20px'}}>Inicio</Link>
            <Link to="/usuario">Usuario</Link>
        </nav>
    );
};

export default Navegacion;