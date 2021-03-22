import React, { useState, useEffect } from "react";
import ATM from "./ATM";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [budget, setBudget] = useState(50);
  const plates = sushis.filter((sushi) => sushi.isEaten);

  console.log(plates);

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((sushiArray) => {
        const mappedSushis = sushiArray.map((sushi) => {
          sushi.isEaten = false;
          return sushi;
        });
        setSushis(mappedSushis);
      });
  }, []);

  function handleAddToPlate(eatenSushi) {
    if (!eatenSushi.isEaten && budget >= eatenSushi.price) {
      // update 1 sushi in our array of 100 sushi
      // set isEaten = true on that one sushi
      const updatedSushis = sushis.map((sushi) => {
        if (sushi.id === eatenSushi.id) {
          // replace the sushi with a new object, update the property
          sushi.isEaten = true;
          return sushi;
        } else {
          return sushi;
        }
      });
      setSushis(updatedSushis);
      setBudget((budget) => budget - eatenSushi.price);
    } else {
      alert("nope.");
    }

    // const newPlates = [...plates, 1];
    // setPlates(newPlates);
  }

  function handleAddToBudget(newAmount) {
    setBudget((budget) => budget + newAmount);
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onAddToPlate={handleAddToPlate} />
      <Table plates={plates} budget={budget} />
      <ATM onAddToBudget={handleAddToBudget} />
    </div>
  );
}

export default App;
