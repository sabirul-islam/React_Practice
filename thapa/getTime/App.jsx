import { React, useState } from 'react';

const App = () => {

    let currentTime = new Date().toLocaleTimeString()

    let [time, setTime] = useState(currentTime)
    
    const getTime = () =>{
        currentTime = new Date().toLocaleTimeString()
        setTime(currentTime)
    }

    return(
        <> 
        <div>
            <h1>{time}</h1>
            <button onClick= {getTime}>Get Time</button>
        </div>
            
        </>
    )
}

export default App