import React,{ useState, useEffect, useContext,Fragment } from 'react';
import ListProperties from './ListProperties/ListProperties';
import './MovieDetail.css';

const MovieDetail = ({art}) => {
  const [ showDescription, setShowDescription ] = useState(true);
  const {video_url, name, description,popularity,image,created_by} = art;
  return(
    <Fragment>
        <section className = 'movieDetail'>
          <h1 style = {{fontFamily:"Merienda One"}}>{name}</h1>
          <video width = {300} height = {200} controls src = {video_url}/>
        </section>
        <ListProperties image = {image} created_by = {created_by} name = {name} description = {description} />
    </Fragment>
  )
}
export default MovieDetail;
/*
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
*/
