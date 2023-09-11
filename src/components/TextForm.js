import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercse was cilcked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success")
    }

    const handleLowClick = () => {
        // console.log("Uppercse was cilcked" + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success")
    }

    const handleClearClick = () => {
        // console.log("Uppercse was cilcked" + text)
        let newText = "";
        setText(newText)
    }

    const handleCopyTextClick = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Copy the text sucessfully!", "success")
    }

    const handleRemoveExtraSpacesClick = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Removing the all spacess!", "success")
    }

    const handleExtractEmailClick = () => {
        const vari = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
        if(vari){
            setText(vari.join('\n'));
        }
        else{
            const text = document.getElementById("myBox");
            text.select();
        }

        
    }

    const handleOnChange = (evt) => {
        // console.log("Change")
        setText(evt.target.value)
    }

    const [text, setText] = useState("")
    // text = "new text";          //Wrong way to change the state
    // setText("new text");        //Correct way to change the state
    return (
        <>
            <div className='container' style={{color: props.mode==="light"?"grey":"white"}}>
                <h1 className='my-2'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} value={text} style={{backgroundColor: props.mode==="dark"?"#13466e":"white", color: props.mode==="light"?"grey":"white"}} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className='btn btn-primary mx-3 my-2' onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-3 my-2' onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-3 my-2' onClick={handleClearClick}>Clear</button>
                <button disabled={text.length===0} className='btn btn-primary mx-3 my-2' onClick={handleCopyTextClick}>Copy</button>
                <button disabled={text.length===0} className='btn btn-primary mx-3 my-2' onClick={handleRemoveExtraSpacesClick}>Removing Space</button>
                <button disabled={text.length===0} className='btn btn-primary mx-3 my-2' onClick={handleExtractEmailClick}>Extract EmailID</button>
            </div>
            <div className="container my-3" style={{color: props.mode==="light"?"grey":"white"}}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something to preview it here"}</p>
                <h2>Email Id:</h2>
                <p>{text.length>0?((text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi))  === null ? "In this text no email Id present":(text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi) + "")):"Enter something to preview it here"}</p>
            </div>
        </>
    )
}

