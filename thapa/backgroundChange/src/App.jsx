import { React, useState } from 'react';

const App = () => {
    const purple = "#8e44ad"
    const [bg, setBg] = useState(purple)
    const [name, setName] = useState("Click Me")

    const bgChange = () =>{
        setBg("#34495e")
        setName("Done")        
    }

    const bgBack = () =>{
        setBg("#8e44ad")
        setName("Click Me") 
    }

    return(
        <> 
        <div style={{backgroundColor: bg}}>
            {/* <button onClick= {bgChange} onDoubleClick={bgBack}>{name}</button> */}
            <button onMouseEnter= {bgChange} onMouseLeave={bgBack}>{name}</button>
        </div>
        
            
        </>
    )
}
//jklml
export default App