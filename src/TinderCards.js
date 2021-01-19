import React, { useState, useEffect } from "react";
import Tindercard from "react-tinder-card";
import "./TinderCards.css";
import database from"./firebase"

export function Tindercards(props) {
  const [people, setPeople] = useState([]);

// Piece of code which runs based on a condition
useEffect(() => {
  //this is where the code runs...
  const unsubscribe = database
  .collection('people')
  .onSnapshot((snapshot) => (
    setPeople(snapshot.docs.map(doc => doc.data()))
  ))

  return () => {
    // this is the cleanup...
    unsubscribe();
  };
  //this will run ONCE when the component loads, and neer again 
}, []);


  // Bad
  // const people = [];
  // people.push('sonny', 'qazi')

  // GOOD(Push to an array in REACT)
  // setPeople([...people, 'sonny', 'qazi'])
  return (
    <div>
      <div className="tinderCards__cardContainer">
      {people.map((person) => (
        <Tindercard
          className="swipe"
          key={person.name}
          preventSwipe={["up", "down"]}
        >
          <div
            style={{ backgroundImage: `url(${person.url})` }}
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </Tindercard>
      ))}
      </div>
    </div>
  );
}

export default Tindercards;
