import React from "react"
import {Route, Switch} from 'react-router-dom'
import Asosiy from "./components/Asosiy/Asosiy";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path = "/" exact component = {Asosiy} />
      </Switch>
    </div>
  );
}

export default App;
