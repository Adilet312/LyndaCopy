import React,{useState,useEffect,Fragment} from 'react';
import { Link } from 'react-router-dom';
import {FaHome} from 'react-icons/fa';
import './Navigation.css';
const Navigation = () =>{
  return(
    <Fragment>
      <header class= 'header'>
        <Link to = '/'><h1 className = 'logo'>Lynda</h1></Link>
        <Link to = '/' style = {{color:"#fff",fontSize:"30px",position:"absolute",right:"10px",top:"10px"}}><FaHome/></Link>
      </header>
    </Fragment>
  )
}
export default Navigation;
