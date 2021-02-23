import React from "react";
import Card from './Cards';
import Data from './Data';
import Netflix from './Netflix';
// import Heading from './Heading'
// import List from './List'

const favSeries = "amazon"
const Favs =()=>{
    if (favSeries === "amazon") {
        return <Netflix/>
    }
}

// {favSeries === "netflix" ? <Netflix/> : <Amazon/>}

function App() {
    return <>
    {/* <Heading/> */}
    {/* <List/> */}


    <h1 className="heading_style">Top 3 Dhingcha</h1>
    <Favs/>

    {Data.map((v, i) => {
        return(
            <Card 
            key={i}
            imgsrc= {v.imgsrc}
            title= {v.title}
            sname= {v.sname}
            link= {v.link}
                
            />
        )
    })}
    </>
}

export default App