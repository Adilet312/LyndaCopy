import React,{useState, useEffect,Fragment} from 'react';
import Movies  from '../Movies/Movies';
import MovieDetail  from '../MovieDetail/MovieDetail';
import Navigation from '../Navigation/Navigation';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
export const ArtContext = React.createContext();
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
    <Router>
      <Navigation/>
      <Switch>

        <Route exact path = '/' render = { (props) =>{
           return<ArtContext.Provider value = {deleteArt}> <Movies videos = {videos}/></ArtContext.Provider>
          }
         }/>
        <Route path='/art/:artId' render = {(props) => {
          let artId = Number(props.match.params.artId);
          let arrayOfArts = videos.filter(art => Number(art.id)===artId && art );
          let [ art ] = arrayOfArts;
          console.log("detailVideo: ",art.video_url)
          return <MovieDetail art = {art}/>
        }}/>
      </Switch>
    </Router>
    </Fragment>
  )
}

export default App;
