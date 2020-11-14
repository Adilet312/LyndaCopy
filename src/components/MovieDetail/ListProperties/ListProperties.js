import React,{ useState, useEffect, Fragment}  from 'react';
import { IoIosArrowForward, IoIosArrowDown} from 'react-icons/io';
import './ListProperties.css'
const ListProperties = ({image, name, created_by, description }) => {
const [ showDescription, setShowDescription ] = useState(true);
const [arrows, setArrows ] = useState({
  imageToggle:true,
  titleToggle:true,
  authorToggle:true,
  descriptionToggle:true
});
  return(
    <Fragment>
      <ul className = 'list-properies'>
        <li className = 'description-container'>
          <h3>Description</h3>
          <span className = 'arrow-sign' onClick = {(e) => { e.currentTarget.parentNode.classList.toggle('description-container');setArrows({...arrows, imageToggle:!arrows.imageToggle})}}>
              {arrows.imageToggle ? (<IoIosArrowForward className = 'arrowForward' style = {{fontSize:"20px"}}/>) : (<IoIosArrowDown className = 'arrowDown' style = {{fontSize:"20px"}}/>)}
          </span>
          <div className = 'add-description' style = {{fontFamily:"Merienda One"}}>
            {description}
          </div>
        </li>
      </ul>
   </Fragment>
  )
}
export default ListProperties;
