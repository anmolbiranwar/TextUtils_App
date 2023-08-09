import React, { useState } from 'react'

const TextForm = (props) => {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const clear=()=>{
        let newText="";
        setText(newText);
    }
    const show=()=>{
        let newText=text;
        setText(newText);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const [text, setText]= useState("Enter text here..");
  return (
   <>
    <div className="container">
    <h2>{props.heading}</h2>
    <div className='mb-3'>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
    <button className="btn btn-primary" onClick={clear}>Clear</button>
    <button className="btn btn-primary" onClick={show}>show</button>
    

    </div>
    <div className="container">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words {text.length} characters</p>
        <h2>Preview</h2>
        <p>{show}</p>
    </div>
   </>
  )
}

export default TextForm