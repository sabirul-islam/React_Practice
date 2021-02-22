import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

/*
const fname = "Sabirul"
const lname = "Islam"
const random = Math.random().toFixed(3)*1000
const link = "https://mdsabirulislam.blogspot.com/"
const list = {
    display: "flex",
    justifyContent: "center",
}
*/

let time = new Date(2021, 5, 5, 21)
time = time.getHours()
let greetings = ''
const cssStyle = {}

if (time >= 1 && time < 12) {
    greetings = "Good Morning"
    cssStyle.color = 'green'
} else if(time >= 12 && time < 19){
    greetings = "Good afternoon"
    cssStyle.color = 'orange'
}else{
    greetings = "Good Night"
    cssStyle.color = 'black'
}

ReactDom.render(
    <>
    <h1>Hello Brother, <span style={cssStyle}>{greetings}</span></h1>
    </>
 
 /*
<>
    <h1 className="header">Mr. {`Md ${fname} ${lname}`}</h1>
    <div className="img_div">
    <a href={link} target="_shimul">
    <img src={`https://picsum.photos/200/${random}`} alt="shimul"/>
    </a>
    <a href={link} target="_shimul">
    <img src={`https://picsum.photos/200/${random}`} alt="shimul"/>
    </a>
    <a href={link} target="_shimul">
    <img src={`https://picsum.photos/200/${random}`} alt="shimul"/>
    </a>
    </div>
    
    <h1 contentEditable='true'>Md {fname}</h1>
    <p>Date: {new Date().toLocaleDateString()}</p>
    <p>Date: {new Date().toLocaleTimeString()}</p>
    <p>List of {random} Best Programming Languages.</p>
    <ul style={list}>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>Golang</li>
        <li>Python</li>
        <li>Php</li>
    </ul>
</> 
*/
/*
<React.Fragment>
    <h1> Hello World </h1>
    <p>How Are You?</p>
    <h2>How feel you?</h2>
</React.Fragment> 
   
 <div>
    <h1> Hello World </h1>
    <p>How Are You?</p>
    <h2>How feel you?</h2>
</div> 

[
    <h1> Hello World </h1>,
    <p>How Are You?</p>,
    <h2>How feel you?</h2>
]*/

, document.getElementById('root') )

// var h1 = document.createElement("h1")
// h1.innerHTML = "Sabirul Islam"
// document.getElementById("root").appendChild(h1)