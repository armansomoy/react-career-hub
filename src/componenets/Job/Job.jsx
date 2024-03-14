import React from 'react';

const Job = ({job}) => {
    const {logo} = job;
    return (
        <div>
            <img src={logo} alt="" />
            <h2>Job</h2>
        </div>
    );
};

export default Job;