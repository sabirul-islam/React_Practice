import { React, useState } from 'react';

const App = () => {

    let currentTime = new Date().toLocaleTimeString()

    let [time, setTime] = useState(currentTime)
    
    const getTime = () =>{
        currentTime = new Date().toLocaleTimeString()
        setTime(currentTime)
    }

    // setInterval(getTime, 1000)

    return(
        <> 
        <div>
            <h1>{time}</h1>
        </div>
            
        </>
    )
}

export default App