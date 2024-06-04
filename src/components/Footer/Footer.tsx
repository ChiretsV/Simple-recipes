import './Footer.css'
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

function Footer() {
    return ( 
        <div className='footer'>
            <div className="footer-top">
                <div className="container">
                    <div className="footer-top-logo">
                        <img src="/images/logo.jpg" alt="logo" className="footer-bottom-logo-img" />
                    </div>
                    <p className="footer-top__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
maecenas accumsan lacus vel facilisis. </p>
                    <ul className="footer-top-links">
                        <li className="footer-top-links-item">
                            <a href="/" className="header-bottom-links-item-link">
                                <FaFacebookF />
                            </a>                            
                        </li>
                        <li className="footer-top-links-item">
                            <a href="/" className="header-bottom-links-item-link">
                                <FaTwitter />
                            </a>                            
                        </li>
                        <li className="footer-top-links-item">
                            <a href="/" className="header-bottom-links-item-link">
                                <FaYoutube />
                            </a>                            
                        </li>
                        <li className="footer-top-links-item">
                            <a href="/" className="header-bottom-links-item-link">
                                <FaInstagram />
                            </a>                            
                        </li>
                        <li className="footer-top-links-item">
                            <a href="/" className="header-bottom-links-item-link">
                                <MdMailOutline />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p className="footer-bottom-text">Copyright ©2024 All rights reserved</p>
                </div>
            </div>
        </div>
     );
}

export default Footer;