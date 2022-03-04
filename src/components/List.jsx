import React, { useState,useEffect,useReducer, useRef }   from 'react'

export default function List(props) {
const [renderCloseButton , setRenderCloseButton]= useState(true);
const liRef= useRef();

useEffect(()=>{
  if(props.fard){
liRef.current.classList.add("fard");}
})

  return (
    <ul id="myUL" >

        
      { renderCloseButton && <li ref={liRef}  onClick={(e)=>{e.target.classList.toggle("checked")}}
       > {props.work}    <span onClick={()=>{setRenderCloseButton(false)}}
         className='close'  > {"\u00D7"} </span> </li>}
      
   
    </ul>
  )
}
