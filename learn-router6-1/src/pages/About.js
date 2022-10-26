import { useNavigate } from "react-router-dom"



const About = () =>{
    const navigate = useNavigate()


    return (
        <div>
            <div>This is About</div>
            {/* nevigate to page that want to go */}
            <button onClick={() => navigate("/")}>Back to home page</button>
        </div>
    )
}

export default About