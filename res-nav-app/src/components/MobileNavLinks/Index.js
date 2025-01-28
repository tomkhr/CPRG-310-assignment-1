import { Link } from "react-router-dom";
import './MobileNavLinks.css';
import { useState } from "react";


function MobileNavLinks (){
    const [isOpen, setIsOpen] = useState(false);
    
    const burgerClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className='burgerBox' onClick={burgerClick}>
                <div className='burgerLayer' style={{
                    rotate: isOpen ? "0deg" : "45deg",
                    position: isOpen? "inherit" : "absolute",
                    transition: "all 0.3s ease"
                }}></div>
                <div className='burgerLayer' style={{
                    display: isOpen? "inherit" : "none",
                }}></div>
                <div className='burgerLayer' style={{
                    rotate: isOpen ? "0deg" : "-45deg",
                    position: isOpen? "inherit" : "absolute",
                    transition: "all 0.3s ease"
                }}></div>
            </div>
            {/* <div className={isOpen ? "NavigationLinksMobileOpen" : "NavigationLinksMobile"}> */}
            <div className='NavigationLinksMobile' style={{
                right: isOpen ? "-100%" : "0%",
                transition: "right 0.3s ease-in-out",
            }}>
                    <Link className='navLinkMobile' to="/" alt='Home'>Home</Link>
                    <Link className='navLinkMobile' to="products" alt='Products'>Products</Link>
                    <Link className='navLinkMobile' to="story" alt='Story'>Story</Link>
                    <Link className='navLinkMobile' to="contact" alt='Contact'>Contact</Link>
            </div>
        </div>
    );
};

export default MobileNavLinks;