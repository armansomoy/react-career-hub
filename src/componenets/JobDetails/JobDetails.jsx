import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams(); 
    // console.log(id, jobs)
    const idInt = parseInt(id);
    const job = jobs.find( job => job.id === idInt);
    console.log(job);

    const {
    
        logo,
        salary,
        job_type,
        remote_or_onsite,
        company_name,
        job_title,
        location,
      } = job;
    return (
        <div>
            <h2>Job Details of : {id}</h2>
            <div className='grid gap-4 md:grid-cols-4 '>
                <div className='border md:col-span-3'>
                    <h2 className='text-6xl font-bold'>{job_title}</h2>
                </div>
                <div className='border p-3'>
                    <p className='text-2xl font-semibold py-3'>Company Name: {company_name} </p>
                    <button className='btn btn-primary w-full'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;