import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <section>
      <div>
        <h2 className="text-6xl font-bold text-center py-3">
          Featured Jobs: {jobs.length}{" "}
        </h2>
        <p className="text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div>
        {
            jobs.map(job => <Job key={job.id} job={job}></Job>)
        }
      </div>
    </section>
  );
};

export default FeaturedJobs;
