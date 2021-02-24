import { React, useState } from 'react';

const App = () => {
    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
    })

    const InputEvent = (event) =>{
        const name = event.target.name
        const value = event.target.value
        
        setFullName((preValue)=>{
            if (name === 'fname') {
                return{
                    fname: value,
                    lname: preValue.lname,
                }
            } else if (name === 'lname') {
                return{
                    fname: preValue.fname,
                    lname: value,
                }
            }
        })
    }

    const onsubmits = (event)=>{
        event.preventDefault()
        // setFullName(`Hello, ${fullName.fname} ${fullName.lname}`)
        alert("form submitted")
    }

    return(
<> 
    <div className="main_div">
        <form onSubmit= {onsubmits}>
            <div>
                <h1>{fullName.fname} {fullName.lname}</h1>
                <input type="text" placeholder="Enter Your Name" value={fullName.fname} name="fname" onChange={InputEvent}/>

                <input type="text" placeholder="Enter Your Password" value={fullName.lname} name="lname" onChange={InputEvent}/>
                <button type="submit➰">Submit </button>
            </div>
        </form>
    </div>      
</>
    )
}

export default App