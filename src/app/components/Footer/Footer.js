import React from 'react';
import './Footer.scss';

const Footer = () => (
    <footer className="Footer">
        <div className="container">
            <div className="page-footer font-small blue pt-4 mt-4">
                <div>
                    <h5 className="text-uppercase">Angular 6 WEPACK</h5>
                    <p>Here you can use rows and columns here to organize your footer content.</p>
                </div>
                <div className="footer-copyright text-center py-3">© 2018 Copyright:
                    <a href="https://google.com"> Google.com</a>
                </div>
            </div>
        </div>
    </footer>
);
export default Footer;