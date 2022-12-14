import Home from "./components/Home";
import Styleguide from "./components/Styleguide";
import Projects from "./components/Projects";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/styleguide" element={<Styleguide />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
