import { Outlet } from "react-router-dom";
import StyledNavbar from "../components/StyledNavbar";
 
const SharedLayout = () =>{
    // share of all layout to other by outlet and stylednavabar
    return (
        <>
            {/* use navbar and all of the pages by outlet */}
            {/* use styledNavBar for set of the active and not active */}
            <StyledNavbar/>

            {/* use outlet to call home page */}
            <Outlet />
        </>


    )
}

export default SharedLayout