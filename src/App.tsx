import React from 'react';
import Header from "./Components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Hero from "./Components/Hero/Hero";
import Admin from "./Components/Admin/Admin";
import Menu from "./Components/Menu";

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path={'/hero'} element={ <Hero/> }/>
            <Route path={'/'} element={ <Admin/> }/>
            <Route path={'/menu'} element={ <Menu/> }/>
        </Routes>
    </div>
  );
}

export default App;
