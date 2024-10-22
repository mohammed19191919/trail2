import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import Header from './portifolio/Header';
import Home from './portifolio/Home';
import Experience from './portifolio/Experience';
import Education from './portifolio/Education';
import Publication from './portifolio/Publications';
import Footer from './portifolio/Footer';
import 'aos/dist/aos.css';
import AOS from 'aos';
import AddisHome from "./AddisuFolder/Home/AddisHome"
import About from "./AddisuFolder/About/About"
import Adapub from "./AddisuFolder/Adapublic/Adapub";
import Certificatess from './AddisuFolder/Certific/Certificatess';
import Adanav from './AddisuFolder/Home/Adanav';
import Projects from './AddisuFolder/Projects/Projects';


function App() {
  
  return (
    <div >
      <Adanav /> 
      <Routes>
        <Route  path='/' element= {<AddisHome />} />
        <Route  path='/about' element= {<About />} />
        <Route  path='/projects' element= {<Projects />} />
        <Route  path='/publications' element= {<Adapub />} />
        <Route  path='/certificatess' element= {<Certificatess />} />
        <Route  path='*' element= {<h2>Page not found</h2>} />
     </Routes>

    </div>
  );
}

export default App;