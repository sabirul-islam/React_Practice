import { React, useState } from 'react';

const App = () => {
    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: ""
    })

    const InputEvent = (event) =>{
        const name = event.target.name
        const value = event.target.value
        
        setFullName((preValue)=>{
            if (name === 'fname') {
                return{
                    fname: value,
                    lname: preValue.lname,
                    email: preValue.email,
                    phone: preValue.phone,
                }
            } else if (name === 'lname') {
                return{
                    fname: preValue.fname,
                    lname: value,
                    email: preValue.email,
                    phone: preValue.phone,
                }
            }else if (name === 'email') {
                return{
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email: value,
                    phone: preValue.phone,
                }
            }else if (name === 'phone') {
                return{
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email: preValue.email,
                    phone: value,
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
                <h2>{fullName.email}</h2>
                <h3>{fullName.phone}</h3>

                <input type="text" placeholder="Enter Your Name" value={fullName.fname} name="fname" onChange={InputEvent}/>

                <input type="text" placeholder="Enter Your Password" value={fullName.lname} name="lname" onChange={InputEvent}/>

                <input type="email" placeholder="Enter Your Email" value={fullName.email} name="email" onChange={InputEvent}/>

                <input type="number" placeholder="Enter Your Mobile Number" value={fullName.phone} name="phone" onChange={InputEvent}/>


                <button type="submit➰">Submit </button>
            </div>
        </form>
    </div>      
</>
    )
}

export default App