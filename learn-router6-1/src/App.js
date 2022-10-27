import logo from './logo.svg';
import './App.css';
import { BrowserRouter, NavLink, Routes, Route, Navigate } from "react-router-dom"
import { useState }from "react"

//pages
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Contract from './pages/Contract';
import DataContext from './pages/DataContext';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';



function App() {

  let activeClassName = "nav-active";



  let name = "kongphop"
  let last = "kingpeth"

  const [logIn, setLogIn] = useState(null);

  const handleLogIn = () =>{
    setLogIn(true)
  }

  const handleLogOut = () =>{
    setLogIn(false)
  }

  if (logIn !== null){
    console.log(logIn);
  }

  


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
            {/* set login */}
            <Route path='/' element={ logIn ? <Navigate to="/dashboard"/> : <Home logIn={handleLogIn}/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contract' element={<Contract/>}></Route>

            {/* redirect to home page */}
            {/* send state to home page */}
            {/* can use only one  */}

            {/* set login */}
            
            <Route path='/dashboard' element={logIn ? <Dashboard logOut={handleLogOut}/> : <Navigate to="/" state={"From dashboard"}/>}>
              {/* protect router */}
              {/* /dashboard/settings */}
              <Route path='settings' element={<p>This is the setting route</p>}/>
            </Route>

            {/* use params */}
            {/* /profile/id */}
            <Route path='/profile'>
              <Route path=':userId' element={<Profile/>} ></Route>
            </Route>


            <Route path='*' element={<Error/>}></Route>
          </Routes>
        </BrowserRouter>
      </DataContext.Provider>
    </div>
  );
}

export default App;
