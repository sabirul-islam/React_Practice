import { React, useState } from 'react';
import ToDoLists from './ToDoLists';

const App = () => {

const [inputlist, setInputlist] = useState('')
const [items, setItems] = useState([])

const itemEvent = (event)=>{
    const {value} = event.target
    setInputlist(value)
}

const listOfItems = ()=>{
    setItems((oldItems)=>{
        return [...oldItems, inputlist]
    })
    setInputlist('')
}

const deleteItems = (id) => {
    setItems((oldItems)=>{
        return oldItems.filter((arrElem, index)=>{
           return index !== id
        })
    })
}

return(
<>
    <div className="main_div">
        <div className="center_div">
            <br/>
            <h1>ToDo List</h1>
            <br/>
            <input type="text"
            placeholder="Add A Items"
            value={inputlist}
            onChange={itemEvent}/>
            <button onClick={listOfItems}> + </button>

            <ol>
                {items.map((itemValue, i)=>{
                    return <ToDoLists
                    text={itemValue}
                    key={i}
                    index={i}
                    onSelect={deleteItems}
                    />
                })}
            </ol>
        </div>
    </div>
</>
    )
}

export default App