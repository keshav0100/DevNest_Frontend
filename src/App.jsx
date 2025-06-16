import "./App.css";
import Home from "./pages/Home/Home";
import IssueDetails from "./pages/IssueDetails/IssueDetails";
import Navbar from "./pages/Navbar/Navbar";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import { Route, Routes } from "react-router-dom";
import Subscription from "./pages/Subscription/Subscription";
import Auth from "./pages/Auth/Auth";
import { useDispatch,useSelector } from "react-redux";
import {store} from "./Redux/Store"
import { useEffect } from "react";
import { getUser } from "./Redux/Auth/Action";

function App() {
  const dispatch=useDispatch();
  const {auth}=useSelector(store=>store);
  
  useEffect(()=>{
    const jwt = localStorage.getItem("jwt");
    if(jwt) {
      dispatch(getUser())
    }
  },[auth.jwt])

  return (
    <>
    {auth.user?<div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />}/>
        <Route path="/project/:projectId/issue/:issueId" element={<IssueDetails />}/>
        <Route path="/upgrade_plan" element={<Subscription />}/>
      </Routes>
    </div>:<Auth/>}
    </>
  );
}

export default App;
