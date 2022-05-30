import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white text-center">
            <p className="m-0 py-3"> &copy; Copyright {new Date().getFullYear()} ToolsTun. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;