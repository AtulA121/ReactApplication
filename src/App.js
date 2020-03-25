import React, { useReducer } from 'react';
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

import userContext, {UserProvider} from "./contextComponent/context";
import HttpRequestComp from "./httpComponent/httpRequest"
import UseStateComp from './useStateComponent/useStateComp';
import ItemsUseState from './useStateComponent/itemsUseState';
import AxiosFunctional from './axiosWithFunctionalComponent/axiosFunctional';
import AA from './nesteduseContextComponent/A';
import UseReducerComp from './useReducerComponent/useReducerComp';
import UseReducerWithObjectComp from './useReducerComponent/useReduceWithObject';
import AAA from './useReducerWithuseContext/AAA';
import BBB from './useReducerWithuseContext/BBB';
import CCC from './useReducerWithuseContext/CCC';
import FetchData from './fetchDataWithuseReducer/fetchData';
import FetchDataUsingUseReduce from './fetchDataWithuseReducer/fetchDataUsingUseReduce';

export const UserContext=React.createContext();
export const NestedUserContext=React.createContext();

export const CountContext=React.createContext();

let initialCount=0;
const reducer = (state,action)=>{
  switch (action){
    case 'inc' : 
        return state+1;
    case 'desc' : 
        return state-1;
    case 'reset' : 
        return initialCount;
    default : 
        return state+5;
  }
}

function App() {
  const [count,reduceCount]=useReducer(reducer,initialCount);

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
        {/* <HttpRequestComp></HttpRequestComp> */}

        {/* useState in function component */}
        {/* <UseStateComp /> */}

        {/* useState in functionComponent like state in classComponent */}
        {/* <ItemsUseState /> */}

        {/* axios with useState in functionComponent */}
        {/* <AxiosFunctional /> */}

        {/* nested useContext */}
        {/* <UserContext.Provider value="a121">
          <NestedUserContext.Provider value="atul">
            <AA />
          </NestedUserContext.Provider>
        </UserContext.Provider> */}

        {/* useReduce */}
        {/* <UseReducerComp /> */}

        {/* useReduceWithObject */}
        {/* <UseReducerWithObjectComp /> */}

        {/* useReducer With useContext */}
        {/* <CountContext.Provider value={{
            count : count, countDispatch : reduceCount}
          }>
            count : {count}
          <AAA />
          <BBB />
          <CCC />
        </CountContext.Provider> */}

        {/* fetchData with useState */}
        {/* <FetchData /> */}

        {/* fetchData with useReducer */}
        <FetchDataUsingUseReduce />

      </header>
    </div>
  );
}

export default App;
