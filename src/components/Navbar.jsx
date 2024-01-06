
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter} from "../store/actions.js";

const Navbar = () => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const handleBuyClick = () => {
        dispatch(incrementCounter());
        // Другая логика для обработки нажатия кнопки "Купить"
    };

    return (
        <div>
            <p>Куплено товаров: {counter}</p>
            <button onClick={handleBuyClick}>Купить</button>
        </div>
    );
};

export default Navbar;
