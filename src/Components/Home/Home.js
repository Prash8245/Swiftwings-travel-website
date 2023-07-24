import React ,{useEffect} from 'react';
import HeaderContent from './HeaderContent';
import Service from './Service';
import Locations from './Locations';
import Packages from './Packages';
import Newsletter from './NewsLetter';
import { useLocation } from 'react-router-dom';
// import { useEffect } from 'react';


export default function Home() {
    const location = useLocation();
    const id = location.state;

  useEffect(() => {
    let element = document.getElementById(id);

    if (element) {
        element.scrollIntoView({behavior : 'smooth'});
    }

    }, [id])

  return (
    <div>
        <HeaderContent />
        <Service />
        <Locations />
        <Packages />
        <Newsletter />
    </div>
  );
}
