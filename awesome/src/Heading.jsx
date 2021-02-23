import React from "react"

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

function Heading(){
    return <h1>Hello Brother, <span style={cssStyle}>{greetings}</span></h1>
}

export default Heading