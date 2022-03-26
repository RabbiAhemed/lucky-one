import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Cart.css'
const Cart = (props) => {
    const [item, setItem] = useState([]);
    const { cart } = props;
    let names = [];
    for (const product of cart) {
        names.push(product.name)
    };

    const getRandom = (names) => {
        const pickRandom = names[Math.floor(Math.random() * names.length)];
        setItem(pickRandom)
        console.log(pickRandom);

    }

    return (
        <div className='cart'>
            <h4 className='text-danger text-center'>Cart</h4>
            <h4 className='text-center'>Selected Products:</h4>
            <p>{names}</p>

            <button className='btn-primary mx-auto' onClick={() => getRandom(names)}>Choose One For me</button>
            <h3>Suggested:{ }</h3>

        </div>
    );
};

export default Cart;