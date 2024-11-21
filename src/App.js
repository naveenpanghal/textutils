import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
      {/* pass props to components */}
      <Navbar
        title="TextUtils"
        passPropsHere="About"
      />
      <Routes>
        <Route exact path="/" element={<TextForm heading="Enter the text to analyze below"/>} />
        <Route exact path="/about" element={<About />} />
          
      </Routes>
      </Router>
    </>
  );
}

export default App;
