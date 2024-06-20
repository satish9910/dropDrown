import { useState } from "react";
import List from "./component/List";
import "./App.css";

function App() {
  const [drop, setDrop] = useState("");

  const onHandleFilter = () => {
    {
      setDrop(<List />);
    }
  };

  return (
    <>
      <div className="main-container">
        <button
          className="btn"
          onClick={onHandleFilter}
          onDoubleClick={() => setDrop("")}
        >
          Filters
        </button>
        {drop}
      </div>
    </>
  );
}

export default App;
