import React,{useState, useEffect,Fragment} from 'react';
import Movies  from '../Movies/Movies';
import {without} from 'lodash';
import './App.css';

const App = () =>{
  const [videos,setVideos] = useState([]);
  useEffect(() =>{
    const getVideos = async () =>{
      const request = await fetch('https://orangevalleycaa.org/api/videos');
      const response = await request.json();
      setVideos(response);
    }
    getVideos();
  },[])
  const deleteArt = (e,givenId) =>{
    e.preventDefault();
    let tempArts = videos.filter( art => art.id!==givenId);
    setVideos(tempArts);
  }
  return(
    <Fragment>
      <Movies videos = {videos} deleteArt = {deleteArt}/>
    </Fragment>
  )
}

export default App;
