import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import jobs from "../data/jobs.js";

function JobDetails() {

const { id } = useParams();

const job = jobs.find(
(j) => j.id === parseInt(id)
);

const [msg,setMsg] = useState("");

const applyJob = () => {
setMsg("Application submitted successfully!");

```
setTimeout(()=>{
  setMsg("");
},3000);
```

};

if (!job) return <h2>Job not found</h2>;

return (


<div className="job-container">

  <div className="job-details-card">

    {msg && (
      <div className="popup-msg">
        {msg}
      </div>
    )}

    <div className="logo-box">
      <img src={job.logo} alt={job.company}/>
    </div>

    <h1>{job.title}</h1>
    <h3 className="company">{job.company}</h3>

    <p className="info">
      📍 {job.location} | 💼 {job.type}
    </p>

    <div className="desc-box">
      <h3>Job Description</h3>
      <p>{job.description}</p>
    </div>

    <div className="btns">

      <button
        className="apply-btn"
        onClick={applyJob}
      >
        Apply Now
      </button>

      <Link to="/jobs">
        <button className="back-btn">
          Back
        </button>
      </Link>

    </div>

  </div>

</div>

);
}

export default JobDetails;
