import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Products from '../Products';
import Story from '../Story';
import Contact from '../Contact';

import './Nav.css'

function Nav() {
    return(
        <nav className="navBar">
                <h1 className='navLogo'>LOGO</h1>
            <div className='navLinks'>
                <Link className='navLink' to="/">Home</Link>
                <Link className='navLink' to="products">Products</Link>
                <Link className='navLink' to="story">Story</Link>
                <Link className='navLink' to="contact">Contact</Link>
            </div>


        </nav>
    );
};

export default Nav;