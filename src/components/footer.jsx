import React from 'react';
import "./footer.css";
import { FaWhatsapp, FaInstagram, FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <footer>Walter Castro
            <div className="footer">
                <ul> 
                    <li><a href="https://api.whatsapp.com/send?phone=584147996937&text=Bienvenido"><FaWhatsapp /></a></li> 
                    <li><a href="https://www.instagram.com/waltercas2002/?__pwa=1"><FaInstagram /></a></li> 
                    <li><a href="https://github.com/WalStar29"><FaGithub /></a></li> 
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
