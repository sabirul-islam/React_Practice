import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import React, { useState } from "react";
import ListCom from './ListCom';

const ToDoList = ()=>{

    const [item, setItem] = useState("")
    const [newitem, setNewItem] = useState([])

    const ItemEvent = (event) => {
        setItem(event.target.value)
    }

    const listOfItems = () => {
        setNewItem((prevVal)=>{
            return [...prevVal, item]
        })
        setItem("")
    }

    return(
    <>
        <div className="main_div">
            <div className="center_div"></div>
            <br/>
            <h1>ToDo List</h1>
            <br/>
            <input 
            onChange={ItemEvent} type="text" 
            value={item} 
            placeholder="Add an Item"/>

            <Button 
            onClick={listOfItems} className="newBtn">
                <AddIcon/>
            </Button>
            <br/>
            
            <ol>
                {newitem.map((val, id)=>{
                    return <ListCom text={val} key={id}/>
                })}
            </ol>
            <br/>
        </div>
    </>
    )
}

export default ToDoList