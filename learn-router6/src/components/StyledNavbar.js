import { NavLink } from "react-router-dom";

const StyledNavbar = () => {
    // use this when go to each page and open only page to show of the content
    // by the isActive that from NavLink that have this for show pages
    return (
        <nav className="navbar">
            {/* use this for move to the Add.js of the main path */}


            <NavLink to='/' 
                className={({ isActive }) => (isActive ? "link active" : "link")}
            >
                Home
            </NavLink>

            <NavLink to='/about' 
                className={({ isActive }) => (isActive ? "link active" : "link")}
            >
                About
            </NavLink>

            <NavLink to='/products' 
                className={({ isActive }) => (isActive ? "link active" : "link")}
            >
                Products
            </NavLink>
            
            <NavLink to='/login' 
                className={({ isActive }) => (isActive ? "link active" : "link")}
            >
                Login
            </NavLink>
        </nav>
    )
}

export default StyledNavbar
