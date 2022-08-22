import { Link } from "react-router-dom";
import products from "../data";


const Products = () =>{
    // show of all product page but when click of the link below that go to singleProduct
    return (
        <section className="section">
            {/* call products data  */}
            <div className="products">
                {products.map((products)=>{
                    return <article key={products.id}>
                        <h5>{products.name}</h5>
                        <Link to={`/products/${products.id}`}>more info</Link>
                    </article>
                })}
            </div>
            <Link to='/' className="btn">Home</Link>
        </section>
    )
}

export default Products