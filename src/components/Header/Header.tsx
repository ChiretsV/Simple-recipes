import './Header.css'
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import Search from '../Search/Search';

function Header() {
    return ( 
        <div className='header'>
            <div className="header-top">
                <div className="container">
                    <nav className="header-links">
                        <li className="header-links-item">
                            <a href="/" className="header-links-item-link">Home</a>
                        </li>
                    </nav>
                </div>
            </div>
            <div className="header-bottom">
                <div className="container">
                    <button className="header-bottom-btn">Subscribe</button>
                    <div className="header-bottom-logo">
                        <img src="/images/logo.jpg" alt="logo" className="header-bottom-logo-img" />
                    </div>
                    <ul className="header-bottom-links">
                        <li className="header-bottom-links-item">
                            <a href="/" className="header-bottom-links-item-link">
                                <FaFacebookF />
                            </a>                            
                        </li>
                        <li className="header-bottom-links-item">
                            <a href="/" className="header-bottom-links-item-link">
                                <FaTwitter />
                            </a>                            
                        </li>
                        <li className="header-bottom-links-item">
                            <a href="/" className="header-bottom-links-item-link">
                                <FaYoutube />
                            </a>                            
                        </li>
                        <li className="header-bottom-links-item">
                            <a href="/" className="header-bottom-links-item-link">
                                <FaInstagram />
                            </a>                            
                        </li>
                        <li className="header-bottom-links-item">
                            <a href="/" className="header-bottom-links-item-link">
                                <MdMailOutline />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
     );
}

export default Header;