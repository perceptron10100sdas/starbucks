import './App.css';
import React,{useState} from "react"
import Navbar from './components/navbar'
import Footer from './components/footer'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from './pages/home'
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {

  return (
    
    <div className="App">
<Router>
      <Navbar />
      <Routes>
        
      <Route path='/' element={<Home/>} />
      <Route path="/Menu" exact component={Menu} />
      <Route path="/About" exact component={About} />   
      <Route path="/contact" exact component={Contact} /> 
      </Routes>
      <Footer/>
</Router>
      
    </div>
  );
}

export default App;

