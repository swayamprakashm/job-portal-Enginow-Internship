import { Link } from "react-router-dom";

function JobCard({ job }) {

const saveJob = () => {


const saved = JSON.parse(localStorage.getItem("savedJobs")) || [];

const alreadySaved = saved.find((j) => j.id === job.id);

if (!alreadySaved) {
  saved.push(job);
  localStorage.setItem("savedJobs", JSON.stringify(saved));
  alert("Job saved successfully!");
} else {
  alert("Job already saved!");
}


};

return (


<div className="job-card">

  <div className="job-header">

    <img
      src={job.logo}
      alt={job.company}
      className="job-logo"
    />

    <div>
      <h3>{job.title}</h3>
      <p className="company">{job.company}</p>
    </div>

  </div>

  <p className="location">📍 {job.location}</p>

  <p className="desc">{job.description}</p>

  <div style={{marginTop:"15px"}}>

    <Link
      to={`/job/${job.id}`}
      className="job-btn"
    >
      View Details
    </Link>

    <button
      onClick={saveJob}
      style={{
        marginLeft:"10px",
        padding:"10px 16px",
        border:"none",
        borderRadius:"8px",
        background:"#10b981",
        color:"white",
        cursor:"pointer"
      }}
    >
      Save Job
    </button>

  </div>

</div>


);
}

export default JobCard;
