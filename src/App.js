import React from "react";
import CrudApp from "./components/CrudApp";
import CrudApi from "./components/CrudApi";

function App() {
  return (
    <>
      <h2>Ejercicios con React</h2>
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
    </>
  );
}

export default App;
