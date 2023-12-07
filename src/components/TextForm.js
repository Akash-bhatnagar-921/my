import React, { useState } from 'react'

export default function TextForm(props) {

    const toUpclicked = () =>{
        console.log('Button is clicked' + text)
        let newText = text.toUpperCase();
        console.log(newText)
        setText(newText)
    }

    const toLoclicked = () =>{
        console.log('Button is clicked' + text)
        let newText = text.toLowerCase();
        console.log(newText)
        setText(newText)
    }

    const toReverseClicked = () =>{
        console.log('Button is clicked' + text)
        let newText = text.split("").reverse().join("");
        console.log(newText)
        setText(newText)
    }

    const toClearClicked = () =>{
        console.log('Button is clicked' + text)
        let newText = '';
        console.log(newText)
        setText(newText)
    }

    const changeText = (event) =>{
        console.log('Text has been changed')
        setText(event.target.value)
    }
    let entryWord = 'Enter your text here'
   
    let [text,setText] = useState("")
  return (
    <>
    <div className='container my-3'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" onChange={changeText} value={text} placeholder={entryWord} rows="8"></textarea>
        <button className={`btn btn-${props.btnMode} mx-1 my-2`} onClick={toUpclicked}>To UpperCase</button>
        <button className={`btn btn-${props.btnMode} mx-1 my-2`} onClick={toLoclicked}>To LowerCase</button>
        <button className={`btn btn-${props.btnMode} mx-1 my-2`} onClick={toReverseClicked}>To Reverse</button>
        <button className={`btn btn-${props.btnMode} mx-1 my-2`} onClick={toClearClicked}>To Clear</button>
        </div>
    </div>
    <div className="container">
        <h2>Text Summary</h2>
        <p>{text.split(' ').filter((element)=> {return element.length!==0}).length} Words and {text.length} Characters</p>
        <h2>Preview</h2>
        <p>{text = text === "" ? entryWord:text }</p>
    </div>
    </>
  )
}
