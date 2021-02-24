import { React, useState } from 'react';

const App = () => {

    let [count, setCount] = useState(0)
    
    const IncNum = () =>{
        setCount(count+1)
    }
    
    const IncNum2 = () =>{
        if(count === 0){
            setCount(0)
        }else{
            setCount(count-1)
        }
    }

    return(
        <> 
        <div>
            <h1>{count}</h1>
            <button onClick= {IncNum}>Increase</button>
            <button onClick= {IncNum2}>Decrease</button>
        </div>
            
        </>
    )
}

export default App