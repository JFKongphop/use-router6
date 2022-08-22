import { Outlet } from "react-router-dom";
import StyledNavbar from "../components/StyledNavbar";
 
const Home = () =>{
    return (
        <>
            {/* use navbar and all of the pages by outlet */}
            {/* use styledNavBar for set of the active and not active */}
            {/* <StyledNavbar/> */}
            <h2>product</h2>

            {/* use outlet to call home page */}
            <Outlet />
        </>


    )
}

export default Home