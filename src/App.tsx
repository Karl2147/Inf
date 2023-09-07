import React from "react";
import "./App.css";
import ThreatTable from "./components/ThreatTable.jsx";
import DataTable from "./components/DataTable.js";
import CollapsibleTable from "./components/CollapsibleTable.js";
import ColTab2 from "./components/ColTab2.tsx";

function App() {
  return (
    <div className="App">
      <h1>Security Threats</h1>
      <ColTab2 />
    </div>
  );
}

export default App;
