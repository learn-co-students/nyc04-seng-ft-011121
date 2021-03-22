import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, onAddToPlate }) {
  const [startIndex, setStartIndex] = useState(0);

  const displayedSushi = sushis.slice(startIndex, startIndex + 4);

  const sushiComponents = displayedSushi.map((sushi) => {
    return <Sushi key={sushi.id} sushi={sushi} onAddToPlate={onAddToPlate} />;
  });

  function handleMoreClick() {
    setStartIndex((startIndex) => {
      if (startIndex + 4 >= sushis.length) return 0;
      return startIndex + 4;
    });
    // setStartIndex((startIndex) => startIndex + 4 % sushis.length);
  }

  return (
    <div className="belt">
      {sushiComponents}
      <MoreButton onMoreClick={handleMoreClick} />
    </div>
  );
}

export default SushiContainer;
