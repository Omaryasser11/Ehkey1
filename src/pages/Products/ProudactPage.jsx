// ProductPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { productListState, cartState } from '../../store/index';
import Product from './Product';
import dummyProductList from './dummyProductList';

const ProductPage = () => {
    const [productList, setProductList] = useRecoilState(productListState);
    const [cart, setCart] = useRecoilState(cartState);
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


    React.useEffect(() => {
        setProductList(dummyProductList);
    }, [setProductList]);

    return (
        <div className="product-page col-12">
            <div className="products col-11">
                {productList.map((product) => (
                    <Product key={product.id} product={product} onAddToCart={addToCart} />
                ))}
            </div>
            <Link to="/cart2">cart</Link>
        </div>
    );
};

export default ProductPage;

