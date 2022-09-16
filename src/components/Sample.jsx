import React, { useState } from "react";

function Sample() {
  const [number, setNumber] = useState(0);
  const [people, setPeople] = useState([]);

  const add = () => {
    const newPeople = { name: "ike" };

    setPeople((prev) => [...prev, newPeople]);
    console.log(people);
  };

  return (
    <div>
      <button onClick={add}>add</button>
    </div>
  );
}

export default Sample;
