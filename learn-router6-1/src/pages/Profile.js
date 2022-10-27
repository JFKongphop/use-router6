import { useParams } from "react-router-dom"



const Profile = () =>{

    let { userId } = useParams()

    return (
        <div>
            <h3>Profile</h3>
            <p>The id of this user id {userId}</p>
        </div>
    )
}

export default Profile