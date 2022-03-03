import React, {useRef, useState , useEffect} from 'react';
import List from './List';

export default function Main() {

    const [inputValue , setinputValue] = useState("");
    const [listState , setListState] = useState([]);
    const useNameRef = useRef();
 const toDoList = listState.map((todo,index)=>(
   <List key={index} work={todo} />
 ))
 function handleClick(){
   if( !inputValue == "")
   { setListState( listState => [...listState , inputValue  ]);
  setinputValue("");}
    else window.alert("please type something");
  }
useEffect(()=>{
  useNameRef.current.focus();
} );
  return (
    <>
    <div id="myDIV" className="header">
        <h2 >My To Do List</h2>
        <input ref={useNameRef}  type="text" id="myInput" placeholder="Title..." value={inputValue}
         onChange={(e)=>{setinputValue(e.target.value)}}  />
            <span onClick={handleClick}
                  className="addBtn">Add
            </span>
    </div>
  {toDoList}
        
   
</>
  )
}
