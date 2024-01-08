import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            © {currentYear} Pick For Me App.
        </footer>
    );
};

export default Footer;