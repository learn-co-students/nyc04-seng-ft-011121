import { useState } from "react";
import Filter from "./Filter";
import HogTile from "./HogTile";

function HogList({ hogs }) {
  const [isShowingOnlyGreased, setIsShowingOnlyGreased] = useState(true);
  const [sortBy, setSortBy] = useState("name");

  // Assembly line
  // [{}, {}, {}, {}] => [{}, {}, {}]
  const filteredHogs = hogs.filter((hog) => {
    if (isShowingOnlyGreased === false) {
      return true;
    } else {
      return hog.greased;
    }
  });

  // [{1}, {3}, {2}] => [{1}, {2}, {3}]
  filteredHogs.sort((hogA, hogB) => {
    if (sortBy === "weight") {
      return hogA.weight - hogB.weight;
    } else {
      return hogA.name.localeCompare(hogB.name);
    }
  });

  // [{}, {}, {}] => [<HogTile />, <HogTile />, <HogTile />]
  const tiles = filteredHogs.map((hog) => <HogTile key={hog.name} hog={hog} />);

  function handleToggleShowingGreased(checked) {
    setIsShowingOnlyGreased(checked);
  }

  function handleSortChange(sortBy) {
    setSortBy(sortBy);
  }

  return (
    <div>
      <Filter
        isShowingOnlyGreased={isShowingOnlyGreased}
        onToggleShowingGreased={handleToggleShowingGreased}
        sortBy={sortBy}
        onSortChange={handleSortChange}
      />
      <div className="ui grid container">{tiles}</div>
    </div>
  );
}

export default HogList;
