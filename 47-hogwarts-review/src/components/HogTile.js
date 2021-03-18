import { useState } from "react";
import augustus_gloop from "../assets/augustus_gloop.jpg";
import babe from "../assets/babe.jpg";
import bailey from "../assets/bailey.jpg";
import cherub from "../assets/cherub.jpg";
import galaxy_note from "../assets/galaxy_note.jpg";
import leggo_my_eggo from "../assets/leggo_my_eggo.jpg";
import peppa from "../assets/peppa.jpg";
import piggy_smalls from "../assets/piggy_smalls.jpg";
import piglet from "../assets/piglet.jpg";
import porkchop from "../assets/porkchop.jpg";
import trouble from "../assets/trouble.jpg";
import truffle_shuffle from "../assets/truffle_shuffle.jpg";

const hogImages = {
  Babe: babe,
  Porkchop: porkchop,
  Cherub: cherub,
  "Piggy smalls": piggy_smalls,
  Trouble: trouble,
  Piglet: piglet,
  Peppa: peppa,
  "Truffle Shuffle": truffle_shuffle,
  Bailey: bailey,
  "Galaxy Note": galaxy_note,
  "Leggo My Eggo": leggo_my_eggo,
  "Augustus Gloop": augustus_gloop,
};

function HogTile({ hog }) {
  const [isShowingDetails, setIsShowingDetails] = useState(false);
  const image = hogImages[hog.name];

  function handleToggleDetails() {
    setIsShowingDetails(!isShowingDetails);
  }

  return (
    <div className="ui four wide column">
      <h2>{hog.name}</h2>
      <img
        style={{ width: "100%" }}
        src={image}
        alt={hog.name}
        onClick={handleToggleDetails}
      />
      {isShowingDetails && (
        <div>
          <p>Weight: {hog.weight}</p>
          <p>Specialty: {hog.specialty}</p>
          <p>Greased: {hog.greased ? "yup" : "nup"}</p>
          <p>Medal: {hog["highest medal achieved"]}</p>
        </div>
      )}
    </div>
  );
}

export default HogTile;
