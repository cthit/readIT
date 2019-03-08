import React from "react";
import "./App.css";

import AppHeader from "./components/AppHeader";
import Courses from "./pages/Courses";

const App = () => {
  return (
    <div className="layout">
      <AppHeader />
      <Courses />
    </div>
  );
};

export default App;
