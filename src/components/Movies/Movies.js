import React,{useState,useEffect,Fragment} from 'react';
import Movie from '../Movie/Movie';
import './Movies.css';
import '../Movie/Movie.css';
const Movies = ({videos,deleteArt}) =>{
  return(
    <Fragment>
      <ul className = 'movies'>
        {
          videos.map( art => <li className = 'classLi'><a href = ''><Movie artId = {art.id} video = {art.video_url} title = {art.name} description = {art.description} deleteArt = {deleteArt}/></a></li>)
        }
      </ul>
    </Fragment>
  )
}
export default Movies;
// event.currentTarget.lastElementChild.lastElementChild;
