import { Outlet, NavLink } from 'react-router-dom';


const Layout = () => {
    const style = ({ isActive }) => ({ 
        fontWeight: isActive ? 'bold' : 'normal', 
        padding: '20px', 
        textDecoration: 'none', 
    });

    return (
        <> 
            <h3>Arquetipo de aplicación React</h3>
            <nav 
                style={{ borderBottom: 'solid 1px', 
                paddingBottom: '1rem', 
            }} 
        > 
            <NavLink to="/inicio" style={style}>Inicio</NavLink> 
            <NavLink to="/usuario" style={style}>Usuario</NavLink> 
            </nav> 
            
            <main style={{ paddings: '20px' }}> 
                Integrando componentes 
                <Outlet /> 
            </main> 
        </> 
    );
};

export default Layout;