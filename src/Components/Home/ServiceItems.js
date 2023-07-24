import React from 'react';

export default function ServiceItems(props) {
  return (
    <div className="container-box">
        <div className="container-image">
           {/* <img src="https://ik.imagekit.io/mohdrahil101/files/1a.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668283931060" alt="Flight Services" /> */}
           <img src={props.imgUrl} alt={props.alt} />
        </div>
            <h4>{props.title}</h4>
            <p>{props.desc}</p>
    </div>
    
  );
}
