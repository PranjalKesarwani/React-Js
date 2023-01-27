import React from "react";

function Card(props) {
  return (

    <React.StrictMode>

      <div className="card">
        <img src={props.imgsrc} alt="error occured" className="__img" />
        <div className="card__info">
          <span className="card__category">{props.title}</span>
          <h3 className="card__title">{props.sname}</h3>
          <a rel="noreferrer" href={props.link} target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>

    </React.StrictMode>
  )
}

export default Card;