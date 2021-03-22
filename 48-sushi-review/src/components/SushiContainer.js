import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, onAddToPlate, budget }) {
  const [startIndex, setStartIndex] = useState(0);

  const displayedSushi = sushis.slice(startIndex, startIndex + 4);

  const sushiComponents = displayedSushi.map((sushi) => {
    return (
      <Sushi
        key={sushi.id}
        sushi={sushi}
        budget={budget}
        onAddToPlate={onAddToPlate}
      />
    );
  });

  function handleMoreClick() {
    setStartIndex((startIndex) => startIndex + 4);
  }

  return (
    <div className="belt">
      {sushiComponents}
      <MoreButton onMoreClick={handleMoreClick} />
    </div>
  );
}

export default SushiContainer;
