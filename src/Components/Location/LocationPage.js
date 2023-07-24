import React ,{useEffect} from 'react';
import LocationItems from './LocationItems';
import {useLocation} from 'react-router-dom';

export default function LocationPage() {
    
    const location = useLocation();
    const id = location.state;
    useEffect(() => {
        let element = document.getElementById(id);
        
        if (element) {
            element.scrollIntoView({behavior : 'smooth'});
        }
    }, [id])
    

  return (
    <div className="location-body">
        <section className="location-section">
        <div className="location-heading">
            <h1>Discover The <span>Beautiful World</span></h1>
        </div>
        
        <LocationItems 
            id="kashmir"
            title="Kashmir"
            desc="Heaven on Earth Kashmir is one of the most beautiful travel destinations to visit in North India. Nowhere in India you will behold the scenic landscapes, icy glaciers, pristine lakes and lofty 
                    mountains as beautiful as Kashmir. Serenity and Tranquility redefines itself from the ambiance of Kashmir. Be it summer, Winter or Monsoon, every season has its own charm in Kashmir. The numerous
                    wonders of nature, culture, cuisines and rich history of Kashmir will elevate your travel experience in Incredible India."
            imgUrl="https://ik.imagekit.io/mohdrahil101/files/t1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668285642304"
        />

        <LocationItems 
            id="istanbul"
            title="Istanbul"
            desc="Istanbul, that offers unique historical and cultural riches together has hosted many different 
            civilizations with its geography spread over two continents. This unique city which is admired by 
            its charming nature and the attractive atmosphere is also the symbol of dynamic and modern city life.
            Istanbul has a multicultural texture and a lively atmosphere that melts the past and future in a single
            pot which provides a sense of universal history at every step."

            imgUrl="https://ik.imagekit.io/mohdrahil101/files/t2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668285643398"
            />

        <LocationItems 
            id="paris"
            title="Paris"
            desc="Paris is a diverse and sophisticated city that appeals to the wealthy but can also be enjoyed on a
            budget. In addition to the Eiffel Tower, Paris has countless other gorgeous landmarks and monuments 
            that add to the beauty of the spacious boulevards and their charming cafes. French cuisine is also 
            world famous, and you can find some of the best of it in Paris. It has many stunning sights that 
            showcase impressive architecture and design, and these places have become world-famous for their 
            beauty."

            imgUrl="https://ik.imagekit.io/mohdrahil101/files/t3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668285642746"
            />

        <LocationItems 
            id="bali"
            title="Bali"
            desc="Bali's beauty goes way deeper than its beautiful appearances. Matching Bali's natural wonders are its 
            ever-growing choice of awesome accommodations. From lavish resorts to affordable hostels, developers go 
            all-out to create outstanding, well-equipped and enjoyable places to stay. Private villas can even be rented 
            at unbelievably affordable prices. Many resorts and hotels have splendid swimming and infinity pools, most 
            of which are attractions in themselves."

            imgUrl="https://ik.imagekit.io/mohdrahil101/files/t4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668285643797"
            />


        <LocationItems 
            id="dubai"
            title="Dubai"
            desc="Dubai is an ideal holiday destination for families, with theme parks, beaches, Friday brunches and 
            more to keep everyone happy. The famous Burj Khalifa, the tallest building in the world, is well worth 
            the entrance fee. Burj Al-Arab, often touted as the world's only 7-star hotel, remains underwhelming. 
            Similarly, the Aquaventure Water Park at the Palms Atlantis Hotel is not to be missed. Jumeriah Beach 
            Residence is well established as Dubai's most popular beachfront, and its close proximity to a whole 
            host of restaurants, cafes and shops make it more than worthy of its status."

            imgUrl="https://ik.imagekit.io/mohdrahil101/files/t5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668285643031"
            />


        <LocationItems 
            id="geneva"
            title="Geneva"
            desc="The charming city of Geneva comes with a plethora of attractions and tremendous natural beauty that
            makes every traveler fall in love with it. However, because of this overabundance of attractions, it 
            becomes difficult for the backpackers to determine where to go first. Most of them generally miss out 
            on all the best things that this fantastic city has to offer. The capital of Switzerland and a 
            beautiful lakeside city, Geneva is home to many international organisations like the UN."

            imgUrl="https://ik.imagekit.io/mohdrahil101/files/t6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668285644140"
            />

        <LocationItems 
            id="port-blair"
            title="Port Blair"
            desc="Port Blair is an alluring destination for tourists as it includes a host of attractive locales. 
            There are shimmering but clean beaches, beaches that defy the ferocity of sea and let tourists swim
             leisurely, relics of colonial power and oppression, many must-go museums, libraries, coral reefs, 
             and more"

            imgUrl="https://ik.imagekit.io/mohdrahil101/files/t7.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668285643788"
            />

        <LocationItems 
            id="rome"
            title="Rome"
            desc="The capital of one of the most powerful ancient empires in the world, Rome is a fascinating place 
            that has inspired people to visit for millennia. With incredible works of art, a leisurely pace of life
            and world-renowned cuisine, the Eternal City is worth a visit at least once, though it would take a 
            lifetime to see all it has to offer."

            imgUrl="https://ik.imagekit.io/mohdrahil101/files/t8.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668285644044"
            />
    </section>
    </div>
  );
}
