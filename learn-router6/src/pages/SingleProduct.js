import { Link, useParams } from "react-router-dom";
import products from "../data";


const SingleProduct = () => {
    // show of each product when click of the link below of the title

    // show of the page Id 
    console.log(useParams());

    // show of the pageId
    const { productId } = useParams();

    // when prduct = productId that is show images
    const product = products.find((product)=>product.id === productId)
    const { image, name } = product;
    return (
        <section className="section product">
            <img src={image} alt={name}/>
            <h5>{name}</h5>
            <Link to="/products">Back to products</Link>
        </section>
    )
}

export default SingleProduct