import React from 'react';
import ServiceItems from './ServiceItems';

export default function Service() {
  return (
    <div>
        <section className="container">
            <div className="text">
                <h2>We have the best services available for you!</h2>
            </div>
            <div className="rowitems">
                <ServiceItems 
                imgUrl="https://ik.imagekit.io/mohdrahil101/files/1a.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668283931060"
                alt="Flight Services"
                title="Flight Services"  
                desc="Arrival and Departure" />
            
                <ServiceItems 
                imgUrl="https://ik.imagekit.io/mohdrahil101/files/2a.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668283931071"
                alt="Food Services"
                title="Food Services"  
                desc="Catering"/>

                <ServiceItems 
                    imgUrl="https://ik.imagekit.io/mohdrahil101/files/3a.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668283930752"
                    alt="Travel Services"
                    title="Travel Services"  
                    desc="Pick-up/drop"/>

                <ServiceItems 
                    imgUrl="https://ik.imagekit.io/mohdrahil101/files/4a.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668283930870"
                    alt="Hotel Services"
                    title="Hotel Services"  
                    desc="Check-in/out"/>

            </div>
        </section>
    </div>
  );
}
