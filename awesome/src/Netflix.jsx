import React from 'react';
import Card from './Cards';
import Data from './Data';

const Netflix = ()=>{
    return (
        Data.map((v, i) => {
            return(
                <Card 
                key={i}
                imgsrc= {v.imgsrc}
                title= {v.title}
                sname= {v.sname}
                link= {v.link}
                    
                />
            )
        })
    )
}
export default Netflix