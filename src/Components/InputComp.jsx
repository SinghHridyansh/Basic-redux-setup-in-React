import { React, useState } from "react";
import myStore from "../redux/store";

const InputComp = () => {
  const [state, setState] = useState("");

  const callDispatch = () => {
    myStore.dispatch({
      type: "name",
      username: state,
    });
  };

  return (
    <div style={{ marginTop: "100px", textAlign: "center" }}>
      <h2>Input Component</h2>
      <input
        type="text"
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <button onClick={callDispatch}>Submit</button>
      <h3>Open console and see log data.</h3>
    </div>
  );
};

export default InputComp;
