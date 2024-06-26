import React, { useState } from 'react'
import Nav from './Components/Nav'
import {
    HashRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import ContactUs from "./pages/contact";
import Teams from "./pages/teams";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import Error404 from "./pages/404";

const App = () => {

  
  const [nav,setNav] = useState(false)

  window.addEventListener("scroll",()=>{
    const scroll = document.documentElement.scrollTop
    if(scroll > 405){
      setNav(true)
    }
    else{
      setNav(false)
    }
   })

    return (
        <div className='App'>
        <Router>
            <Nav nav={nav}/>
            <ScrollToTop/>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/classements" element={<Teams />} />
                <Route
                    path="*"
                    element={<Error404 />}
                />
            </Routes>
            <Footer nav={nav}/>
        </Router>
        </div>
    );
}

export default App