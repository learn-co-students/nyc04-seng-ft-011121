import { useState } from "react";

function ATM({ onAddToBudget }) {
  const [money, setMoney] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    onAddToBudget(money);
    setMoney(0);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Money
        <input
          type="number"
          value={money}
          onChange={(e) => setMoney(parseInt(e.target.value))}
        />
      </label>
      <button type="submit">Add to wallet</button>
    </form>
  );
}

export default ATM;
