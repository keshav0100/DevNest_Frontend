import "./App.css";
import Home from "./pages/Home/Home";
import IssueDetails from "./pages/IssueDetails/IssueDetails";
import Navbar from "./pages/Navbar/Navbar";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route
          path="/project/:projectId/issue/:issueId"
          element={<IssueDetails />}
        />
      </Routes>
    </>
  );
}

export default App;
