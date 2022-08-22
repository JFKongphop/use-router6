import { Link } from "react-router-dom";

const Error = () =>{
    // when go to the page not have in the pages that show of this page
    return (
        <section className="section">
            <h2>404</h2>
            <p>page not found</p>
            <Link to="/" className="btn">Home</Link>
        </section>

    )
}

export default Error