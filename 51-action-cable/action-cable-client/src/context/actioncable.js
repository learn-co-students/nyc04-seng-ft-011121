import { createContext, useEffect, useState } from "react";
import { createConsumer } from "@rails/actioncable";

const ActionCableContext = createContext();

function ActionCableProvider({ url, children }) {
  const [cable, setCable] = useState(null);

  useEffect(() => {
    const cable = createConsumer(url);
    setCable(cable);

    return function cleanup() {
      cable.disconnect();
      setCable(null);
    };
  }, [url]);

  return (
    <ActionCableContext.Provider value={cable}>
      {children}
    </ActionCableContext.Provider>
  );
}

export { ActionCableContext, ActionCableProvider };

/* <ActionCableProvider url="ws://localhost:3000/cable">
  <App />
</ActionCableProvider> */
