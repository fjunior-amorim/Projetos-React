import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Home from './components/pages/Home/Home';
import Contact from './components/pages/Contact/Contact';
import Projects from './components/pages/Projects/Projects';
import NewProject from "./components/pages/NewProject/NewProject";
import Project from "./components/project/Projeto/Projeto";
import NavBar from "./components/layout/navBar/NavBar";
import Footer from "./components/layout/footer/Footer";

function App() {

  return (
    <BrowserRouter>
     <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/NewProject" element={<NewProject />} />
        <Route path="/Project/:id" element={<Project />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
