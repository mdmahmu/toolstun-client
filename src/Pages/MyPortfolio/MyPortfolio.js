import React from 'react';

const MyPortfolio = () => {
    return (
        <div className="container">
            <h2 className="text-center text-danger">My Portfolio</h2>

            <div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Name : Md Mahmuduzzaman Masum</li>
                    <li className="list-group-item">Email : mmm.masum@yahoo.com</li>
                    <li className="list-group-item">Educational Background : B.Tech in Computer Science</li>
                    <li className="list-group-item">Skills : HTML, CSS, JAVASCRIPT, REACT,EXPRESS.JS MONGODB, MYSQL.</li>
                    <li className="list-group-item">Project 1 : <a href="https://gym-trainer-7b30e.firebaseapp.com/" className="btn">https://gym-trainer-7b30e.firebaseapp.com/</a></li>
                    <li className="list-group-item">Project 2 : <a href="https://car-warehouse-1d5d4.firebaseapp.com/" className="btn">https://car-warehouse-1d5d4.firebaseapp.com/</a></li>
                    <li className="list-group-item">Project 3 : <a href="https://manufacturer-website-78464.firebaseapp.com/" className="btn">https://manufacturer-website-78464.firebaseapp.com/</a></li>

                </ul>
            </div>

        </div>
    );
};

export default MyPortfolio;