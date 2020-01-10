import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
import Search from "./pages/search";
import Saved from "./pages/saved";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/Saved" component={Saved} />
          <Route component={Search} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
