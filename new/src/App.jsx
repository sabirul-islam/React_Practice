import React from 'react'
import SlotM from './SlotMatch'

const App = () => {
    return <>
        <h1 className="heading_style"> 💛 Welcome To <span>Slot Machine Game</span> 💛 </h1>
        <div className="slotMachine">
            <SlotM x = '❤' y = '❤' z = '❤'/>
            <SlotM x = '❤' y = '💞' z = '💛'/>
            <SlotM x = '💘' y = '❤' z = '💛'/>
        </div>
    </>
}

export default App