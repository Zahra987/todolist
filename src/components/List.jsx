import React, { useState }   from 'react'

export default function List({work}) {
const [renderCloseButton , setRenderCloseButton]= useState(true);
  return (
    <ul id="myUL" >

        
      { renderCloseButton && <li onClick={(e)=>{console.log(e)}}   > {work}    <span onClick={()=>{setRenderCloseButton(false)}}
         className='close'  > {"\u00D7"} </span> </li>}
      
   
    </ul>
  )
}
