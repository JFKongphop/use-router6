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

          <Route path="products" element={<SharedProductLayout/>}>
            <Route index element={<Products/>}/>

            {/* set this to go to each product */}
            <Route path=":productId" element={<SingleProduct/>} />
          </Route>

          <Route path='login' element={<Login setUser={setUser}></Login>}/>

          <Route 
            path='dashboard'
            element={
              <ProtectedRoute user={user}>
                <DashBoard user={user}/>
              </ProtectedRoute>}
          />

          <Route path="*" element={<Error/>}/>
        </Route>

        <Route path="dashboard" element={<div>dashboard</div>}>
          <Route path="stats" element={<div>stats</div>} />
        </Route>

      </Routes>

    </Router>
  );
}

export default App;
