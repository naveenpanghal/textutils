import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("upper case was clicked : " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    //console.log("lower case was clicked : " + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    //console.log("lower case was clicked : " + text);
    let newText = '';
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    console.log("On change : " + text);
  };

  //make 'text' state below
  const [text, setText] = useState("");
  //text = "new text"; //wrong way to change the text
  //setText("new text"); // correct way to change the state
  return (
    <>    
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label"> Example textarea </label>
        <textarea value={text} onChange={handleOnChange} className="form-control" id="myBox" rows="3"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}> Convert to upper case </button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}> Convert to lower case </button>
      <button className="btn btn-primary" onClick={handleClearClick}> Clear text </button>
    </div>
    <div className="container my-3">
      <h1> your text summary</h1>
      <p>{text === '' ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>
    </div>
    </>
  );
}
