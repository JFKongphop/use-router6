import logo from './logo.svg';
import './App.css';
import { BrowserRouter, NavLink, Routes, Route, Navigate } from "react-router-dom"
import { useState }from "react"
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Contract from './pages/Contract';
import DataContext from './pages/DataContext';

function App() {

  let activeClassName = "nav-active";



  let name = "kongphop"
  let last = "kingpeth"

  return (
    <div className="container">
      <DataContext.Provider value={{name : name, last : last}}>
        <BrowserRouter >
          <header>
            <h1> Hello World </h1>
          </header>
          <nav>
            {/* set attribute */}
            <NavLink end to="/" className={({ isActive }) => isActive ? activeClassName : "nav-link"}>Home</NavLink>
            <NavLink to="about" className={({ isActive }) => isActive ? activeClassName : "nav-link"}>About</NavLink>
            <NavLink to="contract" className={({ isActive }) => isActive ? activeClassName : "nav-link"}>Contract</NavLink>
            <NavLink to="dashboard" className={({ isActive }) => isActive ? activeClassName : "nav-link"}>Dashboard</NavLink>
          </nav>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contract' element={<Contract/>}></Route>
            {/* redirect to home page */}
            <Route path='/dashboard' element={<Navigate to="/" />}></Route>
            <Route path='*' element={<Error/>}></Route>
          </Routes>
        </BrowserRouter>
      </DataContext.Provider>
    </div>
  );
}

export default App;
