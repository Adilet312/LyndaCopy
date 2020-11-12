import React,{useState, useEffect,Fragment} from 'react';
import '../Navigation/Navigation.css';


const Search = ({searchTerm,onSearch}) => {
  return(
    <Fragment>
      <input type = 'search' placeholder ='Search' className = 'search' value = {searchTerm}  onChange = {onSearch}/>
    </Fragment>
  )
}
export default Search;
