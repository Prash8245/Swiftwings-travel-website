import React from 'react';

export default function PackageItems(props) {
  return (
    <div className="box">
                <div className="image">
                    <img src={props.imgUrl} alt="" />
                    <h3>Rs.{props.price}/-</h3>
                </div>
            
                <div className="dest-content">
                    <div className="location">
                        <h4>{props.title}</h4>
                        <ul className="pac-details">
                            <li>{props.d1}</li>
                            <li>{props.d2}</li>
                            <li>{props.d3}</li>
                            <li>{props.d4}</li>
                            <li>{props.d5}</li>
                            <li>{props.d6}</li>
                            <li>{props.d7}</li>
                        </ul>
                    </div>
                </div>
            </div>
  );
}
