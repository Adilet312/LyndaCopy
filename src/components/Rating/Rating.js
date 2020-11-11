import React,{useState,useEffect,Fragment} from 'react';
import { BsStarFill } from 'react-icons/bs';
import './Rating.css';
const  Rating= ({popularity}) =>{
  let array = [];
    for( let idx = 0; idx < popularity; idx++){
      array.push(<BsStarFill style = {{color:"gold"}}/>)

  }
  return(
    <Fragment>
      <ul className = 'stars'>
        {
          array.map( star => <li onClick = {() => }>{star}</li>)
        }
      </ul>
    </Fragment>
  )
}
export default Rating;
