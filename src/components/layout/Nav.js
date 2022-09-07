import '../../styles/components/layout/Nav.css';
import { NavLink } from "react-router-dom";
const Nav = (props) => {
    return(
        <nav>
        <div className="holder">
            <ul>
                <li> <NavLink to="/" className={({ isActive }) => isActive? "activo" : undefined }>Home</NavLink>  </li>
                <li> <NavLink to="/Servicios" className={({ isActive }) => isActive? "activo" : undefined }>Servicios</NavLink>  </li>
                <li> <NavLink to="/Galeria" className={({ isActive }) => isActive? "activo" : undefined }>Galeria</NavLink>  </li>
                <li> <NavLink to="/Materiales" className={({ isActive }) => isActive? "activo" : undefined }>Materiales</NavLink>  </li>
                <li> <NavLink to="/Novedades" className={({ isActive }) => isActive? "activo" : undefined }>Novedades</NavLink>  </li>
                <li> <NavLink to="/Contacto" className={({ isActive }) => isActive? "activo" : undefined }>Contacto</NavLink>  </li>
            </ul>
        </div>
    </nav>
    );
}
export default Nav;