import React from 'react';
import '../style.css';
import LocationItems from './LocationItems';
import { Link } from 'react-router-dom';

export default function Locations() {
  return (
    <div>
        <section className="locations" id="locations">
    <div className="package-title">
        <h2>Locations</h2>
    </div>

    <div className="location-content">
        
            <Link to="/Location" state={"kashmir"}>
                <LocationItems 
                    imgUrl="https://ik.imagekit.io/mohdrahil101/files/l1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668283932803"
                    title="India"
                    desc="Kashmir"
                />
            </Link>
            
        <Link to="/Location" state={"istanbul"}>
            <LocationItems 
                imgUrl="https://ik.imagekit.io/mohdrahil101/files/l2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668283932600"
                title="Turkey"
                desc="Istanbul"
            />
        </Link>

        <Link to="/Location" state={"paris"}>
            <LocationItems 
                imgUrl="https://ik.imagekit.io/mohdrahil101/files/l3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668283933112"
                title="France"
                desc="Paris"
            />
        </Link>

        <Link  to="/Location/" state={"bali"}>
            <LocationItems 
                imgUrl="https://ik.imagekit.io/mohdrahil101/files/l4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668283937633"
                title="Indonesia"
                desc="Bali"
            />
        </Link>

        <Link  to="/Location" state={"dubai"}>
            <LocationItems 
                imgUrl="https://ik.imagekit.io/mohdrahil101/files/l5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668283937779"
                title="United Arab Emirates"
                desc="Dubai"
            />
        </Link>

        <Link to="/Location" state={"geneva"}>
            <LocationItems 
                imgUrl="https://ik.imagekit.io/mohdrahil101/files/l6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668283939570"
                title="Switzerland"
                desc="Geneva"
            />
    </Link>

    <Link to="/Location" state={"port-blair"}>
            <LocationItems 
                imgUrl="https://ik.imagekit.io/mohdrahil101/files/l7.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668283938886"
                title="Andaman & Nicobar"
                desc="Port Blair"
            />
    </Link>

<Link to="/Location" state={"rome"}>
    <LocationItems 
            imgUrl="https://ik.imagekit.io/mohdrahil101/files/l8.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668283938741"
            title="Italy"
            desc="Rome"
        />
</Link>
        

    </div>
</section>
    </div>
  );
}
