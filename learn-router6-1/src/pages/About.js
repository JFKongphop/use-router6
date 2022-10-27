import { useNavigate } from "react-router-dom"



const About = () =>{
    const navigate = useNavigate()


    return (
        <div>
            <div>This is About</div>
            {/* nevigate to page that want to go */}
            {/* send data by navigate */}
            <button onClick={() => navigate("/", { state : "From about page"})}>Back to home page</button>
        </div>
    )
}

export default About