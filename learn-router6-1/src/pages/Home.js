import { useLocation, useNavigate } from "react-router-dom"

const Home = ({logIn}) =>{
    // get data from contact by state
    let location = useLocation()
    //console.log(location.state);

    let navigate = useNavigate()
    return (
        <div>
            <p>This is Home</p>
            {/* show state that send form contact */}
            {/* when click of this page that send data from this page */}
            {/* <p>{location.state}</p> */}

            {/* when click to login navigate to dashboard */}
            <button onClick={() => {
                logIn();
                navigate("/dashboard")
            }}>Login</button>
        </div>
    )
}

export default Home