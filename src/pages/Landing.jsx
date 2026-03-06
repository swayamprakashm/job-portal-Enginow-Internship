import { Link } from "react-router-dom";
import jobImg from "../assets/job.png";

function Landing() {
return ( <div className="hero">


  <div className="hero-content">

    <img
      src={jobImg}
      alt="Job Search"
      className="hero-img"
    />

    <h1>Find Your Dream Job</h1>

    <p>
      Discover thousands of opportunities from top companies.
    </p>

    <Link to="/jobs">
      <button className="hero-btn">
        Browse Jobs
      </button>
    </Link>

  </div>

</div>

);
}

export default Landing;
