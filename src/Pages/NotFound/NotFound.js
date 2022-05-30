import React from 'react';
import page404 from '../../Images/404.png';

const NotFound = () => {
    return (
        <div className="text-center">
            <img src={page404} alt="404" className="w-75" />
        </div>
    );
};

export default NotFound;