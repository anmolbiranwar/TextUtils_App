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
    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);

    }
    const [text, setText]= useState("");
  return (
   <>
    <div className="container">
    <h2>{props.heading}</h2>
    <div className='mb-3'>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={clear}>Clear</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    <button className="btn btn-primary" onClick={handleCopy}>Copy Text</button>
    

    </div>
    <div className="container">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words {text.length} characters</p>
        <h2>Preview</h2>
    </div>
   </>
  )
}

export default TextForm