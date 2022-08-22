import { Link } from "react-router-dom";

const Navbar = () => {
    // show of the bar on top of the website that is path to go to another pages
    return (
        <nav className="navbar">
            {/* use this for move to the Add.js of the main path */}
            <Link to='/'>Home</Link>
            <Link to='About' >About</Link>
            <Link to='Products' >Products</Link>
        </nav>
    )
}

export default Navbar
