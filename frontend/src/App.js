import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import "./App.css";

import AppHeader from "./components/AppHeader";
import Courses from "./pages/Courses";
import Course from "./pages/Course";

const App = () => {
  return (
    <div className="layout">
      <AppHeader />
      <Router>
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/courses" />} />
          <Route exact path="/courses" component={Courses} />
          <Route exact path="/course/:code/:mode" component={Course} />
        </Switch>
      </Router>
      
    </div>
  );
};

export default App;
