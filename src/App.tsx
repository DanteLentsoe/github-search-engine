import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import UserPage from "./containers/userpage";

import "./App.css";

function App() {
  const username = prompt("Enter Github Username");

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:userName" component={UserPage} />
        <Redirect to={`/${username}`} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
