import React from 'react';

const About = () => {
    return (
        <div>
           <h1>About page</h1>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Information</h1>
                    <h3>Developed by <a href="https://github.com/denfedweb">Denis Fedorovici</a></h3>
                    <p className="lead">App version 1.0.4</p>
                </div>
            </div>
        </div>
    );
};

export default About;
