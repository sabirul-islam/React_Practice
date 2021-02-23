import React from "react";

function Card(props) {
    const {imgsrc, title, sname, link} = props
    return (
<>
    <div className="cards">
        <div className="card">
            <img src={imgsrc} alt="mypic" className="card__img"/>
            <div className="card__info">
                <span className="card__category">{title}</span>
                <h3 className="card__title"> {sname} </h3>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <button>Watch Now</button>
                </a>
            </div>
        </div>
    </div>
</>
    )
}

export default Card