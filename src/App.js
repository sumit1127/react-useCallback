import { useCallback, useState } from "react";
import ChildComponent from "./components/ChildComponent";

const App = () => {
  const [count, setCount] = useState(0);
  let btnName = "click me";

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increment</button>
      <br />
      <br />
      <div>
        <ChildComponent button={btnName} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default App;
