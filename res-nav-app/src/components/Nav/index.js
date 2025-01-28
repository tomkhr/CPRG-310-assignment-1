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
                <NavLogo className='navLogoImg'></NavLogo>
            </Link>
            </div>
            <div className='navLinks'>
                <Link className='navLink' to="/">Home</Link>
                <Link className='navLink' to="products">Products</Link>
                <Link className='navLink' to="story">Story</Link>
                <Link className='navLink' to="contact">Contact</Link>
            </div>

            <div className='burgerWrap'>
                {/* <Burger></Burger> */}
                <MobileNavLinks />
            </div>


        </nav>
    );
};

export default Nav;