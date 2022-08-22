import { Navigate } from "react-router-dom";
const ProtectedRoute = ({children, user}) =>{
    // when not login that aare back to home page all the time when want to hashbaord
    if(!user){
        return <Navigate to="/"/>
    }
    return (
        children
    )
}

export default ProtectedRoute