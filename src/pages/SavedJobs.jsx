import { Link } from "react-router-dom";
import jobs from "../data/jobs.js";

function SavedJobs() {

const savedJobs =
JSON.parse(localStorage.getItem("savedJobs")) || [];

if(savedJobs.length === 0){
return <h2 style={{textAlign:"center"}}>No saved jobs</h2>;
}

return (


<div className="container">

  <h1>Saved Jobs</h1>

  <div className="jobs-grid">

    {savedJobs.map((saved)=>{

      const job = jobs.find((j)=> j.id === saved.id);

      return (

        <div className="job-card" key={saved.id}>

          <div className="job-header">

            <img
              src={job?.logo}
              alt={saved.company}
              className="job-logo"
            />

            <div>
              <h3>{saved.title}</h3>
              <p className="company">{saved.company}</p>
            </div>

          </div>

          <p className="location">
            📍 {saved.location}
          </p>

          <Link
            to={`/job/${saved.id}`}
            className="job-btn"
          >
            View Details
          </Link>

        </div>

      );

    })}

  </div>

</div>


);
}

export default SavedJobs;
