// import logo from "./logo.svg";

import React from "react";
import "./App.css";
import Canvas from "./Canvas";
import ErrorBoundary from "../src/ErrorBoundary";

function App(): JSX.Element {
  return (
    <div className="App">
      <ErrorBoundary>
        <Canvas />
      </ErrorBoundary>
    </div>
  );
}

export default App;
