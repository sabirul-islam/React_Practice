import { React, useState } from 'react';

const App = () => {
    const [vname, setVname] = useState('')
    const [lastName, setLastName] = useState('')
    const [name, setName] = useState()

    const InputEvent = (event) =>{
        setVname(event.target.value);             
    }

    const InputEvent2 = (event) =>{
        setLastName(event.target.value);             
    }

    const showName = (event)=>{
        event.preventDefault()
        setName(`Hello, ${vname} ${lastName}`)
    }

    return(
<> 
    <div className="main_div">
        <form onSubmit= {showName}>
            <div>
                <h1>{name}</h1>
                <input type="text" placeholder="Enter Your Name" value={vname} onChange={InputEvent}/>
                <input type="text" placeholder="Enter Your Password" value={lastName} onChange={InputEvent2}/>
                <button type="submit➰">Submit </button>
            </div>
        </form>
    </div>      
</>
    )
}

export default App