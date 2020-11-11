import React,{ useState, useEffect, useContext,Fragment } from 'react';
import { Link } from 'react-router-dom';
import {ArtContext} from '../App/App';
import {GrDislike} from 'react-icons/gr';
import {MdAdd} from 'react-icons/md';
import './Movie.css';
import '../Movies/Movies.css';

const Movie = ({video, title, description, artId}) => {
  const [ showIcon, setShowIcon ] = useState(false);
  const deleteArt = useContext(ArtContext);
  return(
    <Fragment>
      <section onMouseEnter = {() => setShowIcon(true)} onMouseLeave = {() => setShowIcon(false)}>
        <video className = 'video' height = {170} width = {300} controls src = {video}/>
        <div className = 'title-description'>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className = 'dislike-add'>
        { showIcon && <GrDislike style = {{fontSize:"20px"}} onClick = {(e) => deleteArt(e,artId)}/>}
        { showIcon && <MdAdd style = {{fontSize:"20px"}}/> }
        </div>
      </section>
   </Fragment>
  )
}
export default Movie;
