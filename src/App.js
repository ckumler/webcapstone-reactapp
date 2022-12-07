import Contact from "./components/Contact";
import Home from "./components/Home";
import Inventory from "./components/Inventory";
import Navbar from "./components/Navbar";
import LogIn from "./components/LogIn";
import Dashboard from "./components/Dashboard"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
