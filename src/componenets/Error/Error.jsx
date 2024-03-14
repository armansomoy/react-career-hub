import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <h2>404 Not Fund</h2>
            <Link to='/'>Home</Link>
        </div>
    );
};

export default Error;