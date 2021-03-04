import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { React, useState } from "react";

const Increment = () => {

    let [count, setCount] = useState(0)

    const IncreaseNumber = ()=>{
        setCount(count + 1)
    }

    const DecreaseNumber = ()=>{
        if(count > 0){
            setCount(count - 1)
        }else{
            alert("ar niche namish na")
            setCount(0)
        }
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1>{count}</h1>
                    <div className="btn_div">
                        <Tooltip title="Add">
                        <Button className="btn_green" onClick={IncreaseNumber}> <AddIcon/></Button>
                        </Tooltip>

                        <Tooltip title="Delete">
                        <Button className="btn_red" onClick={DecreaseNumber}><DeleteIcon/></Button>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Increment