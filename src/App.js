import React from 'react';
import './App.css';
import Welcome from "./withJSX/welcome";
import WelcomeJSX from "./withoutJSX/welcome";
import WelcomeClass from "./classComponent/welcome";
import Parent from "./PassingMethodInProps/parent"
import List from "./listComponenet/list";
import UserForm from "./formComponenet/form"
import CreateTable from './TableComponent/table';
import AccessDomeElement from './RefsComponent/accessDomeElement';
import ErrorBoundry from './errorBoundryComponent/error';
import ExampleComponent from './errorBoundryComponent/example';
import Increment from './CountIncrementComponent/increment';
import A from './contextComponent/a';

import {UserProvider} from "./contextComponent/context";
import HttpRequestComp from "./httpComponent/httpRequest"

function App() {
  let obj={
    id : 1,
    name : "a121",
    age : 25
  }
  return (
    <div className="App">
      <header className="App-header">

        {/* <Welcome userName="atul" />
        <WelcomeJSX userName="pisal" />
        <WelcomeClass userName="a121" />

        <Parent></Parent>

        <UserForm></UserForm>

        <List></List> */}

        {/* <CreateTable /> */}

        {/* <AccessDomeElement />

        // handle error
        <ErrorBoundry>
          <ExampleComponent userName="a121"/>
        </ErrorBoundry> */}
        
        {/* <Increment /> */}

        {/* passing a values to component's */}
        {/* <UserProvider value={obj}>
          <A />
        </UserProvider> */}

        {/* http reqeust */}
        <HttpRequestComp></HttpRequestComp>

      </header>
    </div>
  );
}

export default App;
