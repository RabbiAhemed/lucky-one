import React from 'react';
import { FaShoppingCart } from "react-icons/fa"
import 'bootstrap/dist/css/bootstrap.min.css'


const Product = (props) => {
    const { product, addToCart } = props;
    const { name, price, img, id } = product;
    return (
        <div className='product card'>
            <img className='img-fluid w-25 h-50 text-center' src={img} alt="" />
            <h5>{name}</h5>
            <p>Price:{price}</p>
            <button onClick={() => (addToCart(product))} className=' btn-primary'>Add to Cart<FaShoppingCart></FaShoppingCart></button>

        </div>
    );
};

export default Product;