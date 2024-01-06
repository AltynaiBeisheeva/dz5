
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { incrementCounter} from "../store/actions.js";

const ProductList = () => {
    const [products, setProducts] = useState({ products: [] });
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);

    useEffect(() => {
        axios.get('https://dummyjson.com/products?limit=20')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);

    const handleBuyClick = (productId) => {

        dispatch(incrementCounter());
        console.log(`Товар с id ${productId} куплен!`);
    };

    return (
        <div>
            <h2>Список товаров</h2>
            {products.products.length > 0 ? (
                <ul>
                    {products.products.map((product) => (
                        <li key={product.id}>
                            <p>{product.title}</p>
                            <p>{product.price}</p>
                            <button onClick={() => handleBuyClick(product.id)}>Купить</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Загрузка товаров...</p>
            )}
        </div>
    );
};

export default ProductList;
