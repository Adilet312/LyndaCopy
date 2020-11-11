import React,{useState,useEffect,Fragment} from 'react';
import { Link } from 'react-router-dom';
import Movie from '../Movie/Movie';
import './Movies.css';
import '../Movie/Movie.css';
const Movies = ({videos}) =>{
  return(
    <Fragment>
      <ul className = 'movies'>
        {
          videos.map( art => <li className = 'classLi'>  <Link to = {`/art/${art.id}`}><Movie artId = {art.id} video = {art.video_url} title = {art.name} description = {art.description}/></Link></li>)
        }
      </ul>
    </Fragment>
  )
}
export default Movies;
