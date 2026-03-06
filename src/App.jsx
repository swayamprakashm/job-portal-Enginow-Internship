import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import SavedJobs from "./pages/SavedJobs";

function App() {
  return (
    <BrowserRouter>

      <div className="min-h-screen bg-[#e0e5ec]">

        <Navbar />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/saved" element={<SavedJobs />} />
        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;