import React from 'react';

export default function Register() {
  return (
    <div className="register-body">
        <section className="registration">
        <div className="register-form">
            <h1>Register <span>Here</span></h1>
            <form action="" onsubmit="return validateform()">

            <input type="text" name="myname1" placeholder="Name" id="name" required />
            <input type="email" name="myemail" placeholder="Email-Id" id="" required />
            <input type="tel" name="myphone" placeholder="Phone No." id="phonenum" required />
            <input type="number" name="myage" placeholder="Age" id="" required />
            <h4>Gender</h4>
            <input type="radio" name="mygender" id="" required /> Male &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            <input type="radio" name="mygender" id=""/> Female
            <h4>Departure</h4>
            <input type="datetime-local" name="departuredate" id="" required />
            <h4>Return</h4>
            <input type="datetime-local" name="returndate" id="" required />
            <h4>Travel Destination</h4>
            <input type="checkbox" name="td" id=""/> Kashmir &nbsp; &nbsp; &nbsp;
            <input type="checkbox" name="td" id=""/> Istanbul &nbsp; &nbsp; &nbsp;
            <input type="checkbox" name="td" id=""/> Paris &nbsp; &nbsp; &nbsp;
            <input type="checkbox" name="td" id=""/> Bali &nbsp; &nbsp; &nbsp;
            <input type="checkbox" name="td" id=""/> Dubai &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <input type="checkbox" name="td" id=""/> Geneva &nbsp; &nbsp; &nbsp; 
            <input type="checkbox" name="td" id=""/> Port Blair &nbsp; &nbsp; &nbsp;
            <input type="checkbox" name="td" id=""/> Rome &nbsp; &nbsp; &nbsp;
            <br/> <br/>
            <h4>Package</h4>
            <input type="radio" name="locations" id="loc1" required /> Bronze &nbsp; &nbsp; &nbsp;
            <input type="radio" name="locations" id="loc1"/> Silver &nbsp; &nbsp; &nbsp;
            <input type="radio" name="locations" id="loc1"/> Gold &nbsp; &nbsp; &nbsp;
            <input type="radio" name="locations" id="loc1"/> Platinum &nbsp; &nbsp; &nbsp;
            <br/> <br/> 
            <input type="checkbox" name="t&c" id="" checked required /> I accept the Terms & Conditions.
            <br/> <br/> 
            <input type="submit" value="Submit" className="submitbtn" />

        </form>
        </div>
    </section>
    </div>
  );
}
