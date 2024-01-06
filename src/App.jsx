// App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import store from "./store/store.js";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <Navbar />
                <ProductList />
            </div>
        </Provider>
    );
};

export default App;
