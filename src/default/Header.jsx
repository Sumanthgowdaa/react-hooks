import {NavLink} from 'react-router-dom'
import React from 'react'

function Header() {
  return (
    <header>
      <nav className="navbar navbar-dark navbar-dark-bg-info">
        <div className="container">
            <NavLink to={`/`} className="navbar-brand">React Hooks</NavLink>

            <button className="navbar-toggle" data-bs-toggle="collapse" data-bs-target="#menu" >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id='menu'>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to={`/`} className="nav-link" >Ex1</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/ex2`} className="nav-link" >Ex1</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/ex3`} className="nav-link" >Ex1</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/ex4`} className="nav-link" >Ex1</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/ex5`} className="nav-link" >Ex1</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/ex6`} className="nav-link" >Ex1</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/ex7`} className="nav-link" >Ex1</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/ex8`} className="nav-link" >Ex1</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/ex9`} className="nav-link" >Ex1</NavLink>
                    </li>
                </ul>
            </div>
            
        </div>
      </nav>
    </header>
  )
}

export default Header
