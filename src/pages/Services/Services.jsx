import React, { useEffect, useState } from 'react';
import "./Services.scss";
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { productListState, cartState } from '../../store/index';
import Product from '../Products/Product';
import axios from 'axios';

function Services() {
    const [productList, setProductList] = useRecoilState(productListState);
    const [cart, setCart] = useRecoilState(cartState);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const addToCart = (product, quantity) => {
        const existingIndex = cart.findIndex(item => item.id === product.id);
        if (existingIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingIndex] = { ...updatedCart[existingIndex], quantity: updatedCart[existingIndex].quantity + quantity };
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...product, quantity }]);
        }
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://www.ehkey.com/api/packages'); // Replace with your API endpoint
                setProductList(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProducts();
    }, [setProductList]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section className="Services col-12">
            <div className='col-10 flex'>
                <h1 className='H1'>Our Latest Packages</h1>
                <div className='Line col-3'></div>
            </div>
            <div className="product-page col-12">
                <div className="products col-11">
                    {productList.map((product) => (
                        <Product key={product.id} product={product} onAddToCart={addToCart} />
                    ))}
                </div>
                <Link to="/cart2">cart</Link>
            </div>
        </section>
    );
}

export default Services;
