import React from 'react';

export default function LocationItems(props) {
  return (
    <div>
        <div className="location-detail" id={props.id}>
            <h1>{props.title}</h1>
            <div className="stars">
                <a href="/"><i className='bx bxs-star'></i></a>
                <a href="/"><i className='bx bxs-star'></i></a>
                <a href="/"><i className='bx bxs-star'></i></a>
                <a href="/"><i className='bx bxs-star'></i></a>
                <a href="/"><i className='bx bxs-star'></i></a>
            </div>
            <div className="location-img">
                <img src={props.imgUrl} alt="" />
            </div>
            <p>{props.desc}</p>
            
        </div>
    </div>
  );
}
