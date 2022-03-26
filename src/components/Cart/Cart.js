import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Cart.css'
const Cart = (props) => {

    const { cart, getRandom } = props;
    console.log(props);
    let name = [];
    for (const product of cart) {
        name.push(product.name)
        console.log(typeof product);
    };


    return (
        <div className='cart'>
            <h4 className='text-danger text-center'>Cart</h4>
            <h4 className='text-center'>Selected Products:</h4>
            <p>{name}</p>

            <button className='btn-primary mx-auto' onClick={() => getRandom(cart.name)}>Choose One For me</button>
        </div>
    );
};

export default Cart;