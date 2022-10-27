import { Outlet, Link } from "react-router-dom"



const Dashboard = ({logOut}) =>{
    return (
        <div>
            <h2>Dashbaord</h2>
            <Link to="settings">Settings</Link>
            {/* render child component */}
            <Outlet/>
            <p>Welcome User</p>
            <button onClick={logOut}>Logout</button>
        </div>
    )
}

export default Dashboard