
import React, { useState } from 'react';
import './App.css';
import InputArea from './Components/InputArea';
import TodoItem from './Components/TodoItem';

function APP(){
const[items,setItems]=useState([]);
const additems=(inputText)=>{
  setItems((prevItems)=>{
    return[...prevItems,inputText]
  })
};
const deleteitem=(id)=>{
  setItems((prevItems)=>{
    return prevItems.filter((items,index)=>{
      return index !==id;
    });
  });
}
  return(
    <div className='container'>
      <div className='heading'>
           <h1>To-Do List</h1>
      </div>
<InputArea additems={additems}/>
<div>
  <ul>
    {
      items.map((items,index)=>{
        return(
          <TodoItem key={index} text={items} deleteitem={deleteitem} id={index}/>
            
       
        )
      })
    }
  </ul>
</div>
    </div>
  )
}
export default APP;
