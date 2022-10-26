import { useContext } from "react"
import { Link } from "react-router-dom"
import DataContext from "./DataContext"



const Contract = () =>{

    const { name, last } = useContext(DataContext)
    return (
        <div>
            <div>This is Contract</div>
            <div>{name}</div>
            <div>{last}</div>
            <Link to="/">Back to Home</Link>
        </div>
    )
}

export default Contract