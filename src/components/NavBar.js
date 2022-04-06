import CartWidget from "./CartWidget"
import {NavLink, Link} from "react-router-dom"
function NavBar(){
    return (
        <div className="header">
            <Link to="/">
                <h1>LIBRERIA EDEN</h1>
            </Link>
            <NavLink to="/categoria/cuadernos">
                <p>
                    cuadernos
                </p>
            </NavLink>
            <NavLink to="/categoria/lapices">
                <p>
                    lapices
                </p>
            </NavLink>
            <NavLink to="/categoria/lapiceras">
                <p>
                    lapiceras
                </p>
            </NavLink>
            <CartWidget/>
            
            {/* <li><a href="#"> </a></li>
            <li><a href="#">nosotros</a></li>
            <li><a href="#">cuadernos</a></li>
            <li><a href="#">contacto</a></li>
            <li><a href="#"><CartWidget/></a></li> */}
            {/* <CartWidget/> */}
        </div>
    )
}

export default NavBar