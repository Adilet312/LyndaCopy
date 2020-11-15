import React,{useState, useEffect,Fragment} from 'react';
import Movies  from '../Movies/Movies';
import MovieDetail  from '../MovieDetail/MovieDetail';
import Navigation from '../Navigation/Navigation';
import Search from '../Search/Search';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
export const ArtContext = React.createContext();
const App = () =>{

  const [videos,setVideos] = useState([]);
  const [searchTerm, setSearchTerm ] = useState(
    localStorage.getItem('search') || 'Plein Air Essentials'
  )
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
  {/*Search*/}
  useEffect(() =>{
    localStorage.setItem('search',searchTerm);
  },[searchTerm]);
  const onSearch = (event) => setSearchTerm(event.target.value);
  const searchVideos = videos.filter(video => video.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return(
    <Fragment>
    <Router>
      <Navigation/>
      <Search searchTerm = {searchTerm} onSearch = {onSearch}/>
      <Switch>

        <Route exact path = '/' render = { (props) =>{
           return<ArtContext.Provider value = {deleteArt}> <Movies videos = {videos}/></ArtContext.Provider>
          }
         }/>
        <Route  path='/art/:artId' render = {(props) => {
          let artId = Number(props.match.params.artId);
          let arrayOfArts = videos.filter(art => Number(art.id)===artId && art );
          let [ art ] = arrayOfArts;
          return <MovieDetail art = {art}/>

        }}/>
      </Switch>
    </Router>
    </Fragment>
  )
}

export default App;
