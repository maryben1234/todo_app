import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Title from "./component/Title";
import Addtodo from "./component/Addtodo";

function App() {
  return (
    <>
      <div>
        <Title />
        <Addtodo />
      </div>
    </>
  );
}

export default App;
