import React from "react";

const Job = ({ job }) => {
  const { logo, salary, job_type, remote_or_onsite, company_name, job_title,  } = job;
  return (
    <div className="card card-compact bg-base-300 shadow-xl">
      <figure>
        <img
          src={logo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
            <button className="px-5 py-2 font-extrabold border rounded border-gray-300 mr-4 text-blue-300">{remote_or_onsite}</button>
            <button  className="px-5 py-2 font-extrabold border rounded border-gray-300 mr-4  text-blue-300">{job_type}</button>
        </div>
        <div className="card-actions justify">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
