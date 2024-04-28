import React from "react";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p className="copyright">© 2024 Your Company Name</p>
                <ul className="social-links">
                    <li>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-twitter"></i>
                        </a>
                    </li>
                    {/* Add more social media links as needed */}
                </ul>
            </div>
        </footer>
    )
}
export default Footer;