import { Link } from 'react-router-dom';
import { ReactComponent as NavLogo } from './assets/nav_logo.svg';
import './Nav.css';
// import Burger from '../Burger';
import MobileNavLinks from '../MobileNavLinks/Index';

function Nav() {

    return(
        <nav className="navBar">
            <div>
            <Link className='navLogo' to="/">
                <NavLogo className='navLogoImg' alt='MidTown ButcherShop Logo' title='MidTown ButcherShop Logo'></NavLogo>
            </Link>
            </div>
            <div className='navLinks'>
                <Link className='navLink' to="/" alt='Home'>Home</Link>
                <Link className='navLink' to="products" alt='Products'>Products</Link>
                <Link className='navLink' to="story" alt='Story'>Story</Link>
                <Link className='navLink' to="contact" alt='Contact'>Contact</Link>
            </div>

            <div className='burgerWrap'>
                {/* <Burger></Burger> */}
                <MobileNavLinks />
            </div>


        </nav>
    );
};

export default Nav;