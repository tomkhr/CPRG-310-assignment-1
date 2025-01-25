import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Products from '../Products';
import Story from '../Story';
import Contact from '../Contact';
import { ReactComponent as NavLogo } from './assets/nav_logo.svg';
import './Nav.css'

function Nav() {
    return(
        <nav className="navBar">
            <div>
            <fig className='navLogo'>
                <NavLogo className='navLogoImg'></NavLogo>
            </fig>
            </div>
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