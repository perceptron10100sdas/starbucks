import React,{useState} from "react"
import Logo from '../asset/starbuckslogo.webp'
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/navbar.css";


function navbar() {
  
  const[openLinks,setOpenLink]=useState(false);
  const toggleNavbar= () =>
  {
    setOpenLink(!openLinks) 
  }
  return (
    <div className='navbar'>
        <div className='leftside' id={openLinks?"open": "close"}>
            <img src={Logo}  />
    
        </div>
<div className='rightside'>

  <Link to="/">home</Link>
  <Link to="/menu">menu</Link>
  <Link to="/about">about us</Link>
  <Link to="/contact">contacts</Link>
  <button onClick={toggleNavbar}><ReorderIcon/></button>
</div>
 </div>
    
    
  )
}


export default navbar