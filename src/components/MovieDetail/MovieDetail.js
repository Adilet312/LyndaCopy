import React,{ useState, useEffect, useContext,Fragment } from 'react';
import ListProperties from './ListProperties/ListProperties';
import './MovieDetail.css';

const MovieDetail = ({art}) => {
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
