import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="innerfooter">
                <div className="logo">
                        <li><a href="/"><h1>Lime Tree</h1></a></li>
                </div>
                <div className="firstcontent">
                    <h1> Need Help ?</h1>
                    <div style={{display: 'inline-block', marginRight: '7px'}}>
                        <p>Terms &amp; Conditions</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div style={{display: 'inline-block', marginRight: '7px'}}>
                        <p>Legal</p>
                        <p>Advertising</p>
                    </div>
                </div>
                <div className="firstcontent" style={{float: 'right'}}>
                    <h1>About Us</h1>
                    <div style={{display: 'inline-block', marginRight: '7px'}}>
                        <p>Team</p>
                        <p>Contact</p>
                    </div>
                    <div style={{display: 'inline-block', marginRight: '7px'}}>
                        <p>Location</p>
                        <p>Our Beliefs</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;