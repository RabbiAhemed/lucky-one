import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    const getRandom = (cart) => {
        const pickRandom = cart[Math.floor(Math.random() * cart.length)];
    }

    return (
        <div className='shop-container row'>
            <div className='products-container col-lg-6 ms-2'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container mx-auto col-lg-6'>
                <Cart cart={cart} random={getRandom}></Cart>
            </div>

        </div>

    );
};

export default Shop;