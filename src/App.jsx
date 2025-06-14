import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Navbar/Navbar";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </>
  );
}

export default App;
