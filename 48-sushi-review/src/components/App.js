import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [plates, setPlates] = useState([]);
  const [budget, setBudget] = useState(50);

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((sushiArray) => {
        setSushis(sushiArray);
      });
  }, []);

  function handleAddToPlate(sushi) {
    const newPlates = [...plates, 1];
    setPlates(newPlates);
    setBudget((budget) => budget - sushi.price);
  }

  return (
    <div className="app">
      <SushiContainer
        sushis={sushis}
        onAddToPlate={handleAddToPlate}
        budget={budget}
      />
      <Table plates={plates} budget={budget} />
    </div>
  );
}

export default App;
