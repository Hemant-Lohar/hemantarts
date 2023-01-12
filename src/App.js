import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import GallaryPage from "./pages/GallaryPage";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
        <Navbar />
      <Routes>
        <Route exact path="https://hemants.live/"  element={<Home />}/>
        <Route path="https://hemants.live/gallary" element={<GallaryPage/>} />
        <Route path="https://hemants.live/contact" element={<Contact/>} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
