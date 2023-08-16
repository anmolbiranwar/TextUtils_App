import React, { useState } from 'react'

export default function About(props) {
  // const [myStyle, setMyStyle]=useState({
  //   color:"black",
  //   backgroundColor:"white"
  // })
    let myStyle={
      color: props.mode === 'dark'? 'white':'black',
      backgroundColor: props.mode ==='dark'?'black':'white'
    }
  return (
        <div className="accordion px-3 py-3" id="accordionExample" style={myStyle}>
          <h2 className='my-3'>About Us</h2>
      <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Analyze Your text</strong>
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count
          </div>
        </div>
      </div>
      <div className="accordion-item " style={myStyle}>
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to use</strong>
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
           TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
          </div>
        </div>
      </div>
      <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser Compatible</strong>
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
           This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
          </div>
        </div>
      </div>
    </div>
  )
}
