import Navbar from "./components/Navbar/Navbar";
import Hero from "./pages/home/Hero";
import About from "./pages/Aboutus/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Joinus from "./pages/Joinus/Joinus";
import Login from "./pages/Login/Login";
import Trainers from "./pages/Aboutus/Trainer/Trainers";
import Activity2 from "./pages/MyActivity2";
import MyActivity1 from "./pages/MyActivity1";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
            </>
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/joinus" element={<Joinus />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/trainers" element={<Trainers />}></Route>
        <Route path="/activity1" element={<MyActivity1/>} ></Route>
        <Route path="/activity2" element={<Activity2/>} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
