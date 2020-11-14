import React,{ useState, useEffect, Fragment}  from 'react';
import { IoIosArrowForward, IoIosArrowDown} from 'react-icons/io';
import './ListProperties.css'
const ListProperties = ({image,  created_by, description }) => {
const [arrows, setArrows ] = useState({
  imageToggle:true,
  authorToggle:true,
  descriptionToggle:true
});
  return(
    <Fragment>
      <ul className = 'list-properies'>
        <li className = 'description-container'>
          <h3>Description</h3>
          <span className = 'arrow-sign' onClick = {(e) => { e.currentTarget.parentNode.classList.toggle('description-container');setArrows({...arrows, descriptionToggle:!arrows.descriptionToggle})}}>
              {arrows.descriptionToggle ? (<IoIosArrowForward className = 'arrowForward' style = {{fontSize:"20px"}}/>) : (<IoIosArrowDown className = 'arrowDown' style = {{fontSize:"20px"}}/>)}
          </span>
          <div className = 'add-description' style = {{fontFamily:"Merienda One"}}>
            {description}
          </div>
        </li>
        <li className = 'description-container'>
          <h3>Author</h3>
          <span className = 'arrow-sign' onClick = {(e) => { e.currentTarget.parentNode.classList.toggle('description-container');setArrows({...arrows, authorToggle:!arrows.authorToggle})}}>
              {arrows.authorToggle? (<IoIosArrowForward className = 'arrowForward' style = {{fontSize:"20px"}}/>) : (<IoIosArrowDown className = 'arrowDown' style = {{fontSize:"20px"}}/>)}
          </span>
          <div className = 'add-description' style = {{fontFamily:"Merienda One"}}>
            {created_by}
          </div>
        </li>
        <li className = 'description-container'>
          <h3>Image</h3>
          <span className = 'arrow-sign' onClick = {(e) => { e.currentTarget.parentNode.classList.toggle('description-container');setArrows({...arrows, imageToggle:!arrows.imageToggle})}}>
              {arrows.imageToggle ? (<IoIosArrowForward className = 'arrowForward' style = {{fontSize:"20px"}}/>) : (<IoIosArrowDown className = 'arrowDown' style = {{fontSize:"20px"}}/>)}
          </span>
          <div className = 'add-description' style = {{fontFamily:"Merienda One"}}>
            <img src = {image}/>
          </div>
        </li>
      </ul>
   </Fragment>
  )
}
export default ListProperties;
