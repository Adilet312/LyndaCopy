import React,{ useState, useEffect, Fragment}  from 'react';
import { IoIosArrowForward, IoIosArrowDown} from 'react-icons/io';
import './ListProperties.css'
const ListProperties = ({image, name, created_by, description }) => {
const [arrows, setArrows ] = useState({
  imageToggle:true,
  titleToggle:true,
  authorToggle:true,
  descriptionToggle:true
});
  return(
    <Fragment>
      <ul className = 'list-properies'>
        <li><span className = 'imageContainer'>{arrows.imageToggle ? <IoIosArrowForward className = 'arrow' onClick = {() => setArrows({...arrows, imageToggle:!arrows.imageToggle})}/>:<IoIosArrowDown className = 'arrow' onClick = {() => setArrows({...arrows, imageToggle:!arrows.imageToggle})}/>}<h3>Image</h3></span></li>
        <li><span className = 'authorContainer'>{arrows.titleToggle ? <IoIosArrowForward className = 'arrow' onClick = {() => setArrows({...arrows, titleToggle:!arrows.titleToggle})}/>:<IoIosArrowDown className = 'arrow' onClick = {() => setArrows({...arrows, titleToggle:!arrows.titleToggle})}/>}<h3>Title</h3></span></li>
        <li><span className = 'created_byContainer'>{arrows.authorToggle ? <IoIosArrowForward className = 'arrow' onClick = {() => setArrows({...arrows, authorToggle:!arrows.authorToggle})}/>:<IoIosArrowDown className = 'arrow' onClick = {() => setArrows({...arrows, authorToggle:!arrows.authorToggle})}/>}<h3>Author</h3></span></li>
        <li><span className = 'durationContainer'>{arrows.descriptionToggle ? <IoIosArrowForward className = 'arrow' onClick = {() => setArrows({...arrows, descriptionToggle:!arrows.descriptionToggle})}/>:<IoIosArrowDown className = 'arrow' onClick = {() => setArrows({...arrows, descriptionToggle:!arrows.descriptionToggle})}/>}<h3>Description</h3></span></li>
      </ul>
   </Fragment>
  )
}
export default ListProperties;
/*
<img src={image} className = 'image'/>
<div className = 'author'>{name}</div>
<div className = 'created_by'>{created_by}</div>
<div className = 'duration'>{descriptionli
*/
