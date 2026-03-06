import { useState } from "react";
import jobsData from "../data/jobs.js";
import JobCard from "../components/JobCard";

function Jobs() {

  const [search, setSearch] = useState("");

  const filteredJobs = jobsData.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">

      <h1>Available Jobs</h1>

      <input
        type="text"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />

      <div className="jobs-grid">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

    </div>
  );
}

export default Jobs;