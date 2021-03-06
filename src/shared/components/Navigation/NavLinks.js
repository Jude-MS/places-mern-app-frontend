import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.css';
import { AuthContext } from '../../context/auth-context';

const NavLinks = props => {
    const authCtx = useContext(AuthContext);

    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>ALL USERS</NavLink>
            </li>
            {authCtx.isLoggedIn && <li>
                <NavLink to="/u1/places">MY PLACES</NavLink>
            </li>}
            {authCtx.isLoggedIn && <li>
                <NavLink to="/places/new">ADD PLACE</NavLink>
            </li>}
            {!authCtx.isLoggedIn && <li>
                <NavLink to="/auth">AUTHENTICATION</NavLink>
            </li>}
            {authCtx.isLoggedIn && <li>
                <button onClick={authCtx.logout}>LOGOUT</button>
            </li>}
        </ul>
    )
}

export default NavLinks;
