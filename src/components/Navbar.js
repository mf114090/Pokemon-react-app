import React from 'react';
import { Link } from 'react-router-dom';
import Pokelogo from './img/Pokelogo.png';


const Navbar= () => {
    return (
        <nav className="navbar nabvar-light bg-light">
            <div className="container">
                <div className='navbar-brand  text-uppercase col-md-3'>
                    <Link to="/">
                        <img src={Pokelogo} className="content- w-25"   alt="..."/>
                    </Link>
                </div>
                
            </div>
        </nav>
    )
}

export default Navbar;