import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    salary,
    job_type,
    remote_or_onsite,
    company_name,
    job_title,
    location,
  } = job;
  return (
    <div className="card card-compact bg-base-300 shadow-xl m-2 border-gray-400">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="px-5 py-2 font-extrabold border rounded border-gray-300 mr-4 text-blue-300">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold border rounded border-gray-300 mr-4  text-blue-300">
            {job_type}
          </button>
        </div>
        <div className="flex">
          <div className="flex pr-3 text-xl">
            <FaLocationDot className="pr-2 text-2xl" /> {location}{" "}
          </div>
          <div className="flex pr-3 text-xl">
            <CiDollar className="pr-2 text-3xl" /> {salary}{" "}
          </div>
        </div>
        <div className="card-actions justify">
          <Link to={`/job/${id}`}>
            {" "}
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
