import React,{ useState, useEffect, useContext,Fragment } from 'react';
import Rating from '../Rating/Rating';
import { AiOutlineArrowRight, AiOutlineArrowDown } from 'react-icons/ai';
import './MovieDetail.css';

const MovieDetail = ({art}) => {
  const [ showDescription, setShowDescription ] = useState(true);
  const {video_url, name, description,popularity} = art;
  return(
    <Fragment>
      <section className = 'movieDetail'>
        <h1>{name}</h1>
        <video width = {448} height = {252} controls src = {video_url}/>
        <div className ='descriptionContainer'>
          <span className = 'arrow-sign' onClick = {(e) => {
            let show_hide = e.currentTarget.parentNode.classList;
            console.log(show_hide);
            show_hide.toggle('descriptionContainer')
            setShowDescription(!showDescription);
          }}>
            {showDescription ? (<AiOutlineArrowRight style = {{fontSize:"20px"}}/>) : (<AiOutlineArrowDown style = {{fontSize:"20px"}}/>)}
          </span>
          <Rating popularity = {Number(popularity)}/>
          <div className = 'add-description'>
          {description}
          </div>
        </div>
      </section>
    </Fragment>
  )
}
export default MovieDetail;
