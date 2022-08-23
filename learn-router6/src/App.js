import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import './App.css';
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import SingleProduct from "./pages/SingleProduct";
import DashBoard from "./pages/DashBoard";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import SharedProductLayout from './pages/SharedProductLayout';

function App() {
  const [ user, setUser ] = useState(null)
  return (
    <Router>

      <Routes >

        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home/>} />
          <Route path="About" element={<About/>}/>

          {/* to product of the content */}
          <Route path="products" element={<SharedProductLayout/>}>
            <Route index element={<Products/>}/>

            {/* set this to go to each product */}
            <Route path=":productId" element={<SingleProduct/>} />
          </Route>

          {/* when click to login that send props to this page */}
          <Route path='login' element={<Login setUser={setUser}></Login>}/>

          {/* get the name and send to dashboard and show of name to this page */}
          <Route 
            path='dashboard'
            element={
              <ProtectedRoute user={user}>
                <DashBoard user={user}/>
              </ProtectedRoute>}
          />

          {/* when not have page that send to this error */}
          <Route path="*" element={<Error/>}/>
        </Route>

        {/* when user is true that go to this page */}
        <Route path="dashboard" element={<div>dashboard</div>}>
          <Route path="stats" element={<div>stats</div>} />
        </Route>

      </Routes>

    </Router>
  );
}

export default App;
