import React from 'react';

export default function LocationItems(props) {
  return (
    <div>
        <a href="/" target="_blank"><div className="col-content">
            <img src={props.imgUrl} alt="" />
            <h5>{props.title}</h5>
            <p>{props.desc}</p>
        </div></a>
    </div>
  );
}
