import React,{ useState, useEffect, useContext,Fragment } from 'react';
import { AiOutlineArrowRight, AiOutlineArrowDown } from 'react-icons/ai';
import './MovieDetail.css';

const MovieDetail = ({art}) => {
  const [ showDescription, setShowDescription ] = useState(true);
  const {video_url, name, description,popularity,image,created_by,duration} = art;
  return(
    <Fragment>
      <div className = 'container'>
        <section className = 'movieDetail'>
          <h1 style = {{fontFamily:"Merienda One"}}>{name}</h1>
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
            <div className = 'add-description' style = {{fontFamily:"Merienda One"}}>
            {description}
            </div>
          </div>
        </section>
        <aside>
          <img src={image} className = 'image'/>
          <div className = 'author'>{name}</div>
          <div className = 'created_by'>{created_by}</div>
          <div className = 'duration'>{duration}</div>
        </aside>
      </div>
    </Fragment>
  )
}
export default MovieDetail;
