import React from "react";
import './Nav.scss'
import {
    Link, NavLink
} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <>
                <div className="topnav">
                    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : 'none')}>Home</NavLink>
                    <NavLink to="/todos" className={({ isActive }) => (isActive ? "active" : 'none')}>Todos</NavLink>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : 'none')}>About</NavLink>
                    <NavLink to="/user" className={({ isActive }) => (isActive ? "active" : 'none')}>User</NavLink>
                </div>
            </>
        )
    }
}

export default Nav;