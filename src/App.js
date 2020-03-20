import React from 'react';
import './App.css';
import Welcome from "./withJSX/welcome";
import WelcomeJSX from "./withoutJSX/welcome";
import WelcomeClass from "./classComponent/welcome";
import Parent from "./PassingMethodInProps/parent"
import List from "./listComponenet/list";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome userName="atul" />
        <WelcomeJSX userName="pisal" />
        <WelcomeClass userName="a121" />
        <Parent></Parent>
        <List></List>
      </header>
    </div>
  );
}

export default App;
