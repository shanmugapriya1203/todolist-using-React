import React, { useState } from 'react'
import Button from '@mui/material/Button';

const InputArea = (props) => {
const[inputText,setInputText]=useState("");
const handleChange=(event)=>{
setInputText(event.target.value)
}
  return (
    <div className='form'>
        <input type='text' onChange={handleChange} value={inputText}/>
        <Button variant="outlined" onClick={()=>{
            props.additems(inputText);
            setInputText("");
        }}>
        Add
            </Button>
      
    </div>
  )
}

export default InputArea
