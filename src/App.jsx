import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      {/* <Routes> */}
        {/* <Route path="/" element={<Home/>}/>
        <Route path="/navbar" element={<Home/>}/> */}
      {/* </Routes> */}
    </>
  );
}

export default App;
