import React from 'react'

const SlotM = (props)=>{
    // let x = '❤'
    // let y = '❤'
    // let z = '💛'

const {x, y, z} = props

    if(x===y && y===z){
        return(
            <>
            <div>
                <h1>{x} {y} {z}</h1>
                <h1>This is Matching.</h1>
                <hr/>
            </div>                
            </>
        )
    }else{
        return(
            <>
            <div>
                <h1>{x} {y} {z}</h1>
                <h1>This is not Matching.</h1>
                <hr/>
            </div>                
            </>
        )
    }
}

export default SlotM