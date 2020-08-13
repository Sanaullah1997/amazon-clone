import React from 'react';
import './checkoutProducts.css';
import { useStateValue } from './StateProvider';

function CheckoutProducts({ id, title, image, price, rating }) {

    // eslint-disable-next-line no-empty-pattern
    const [{ }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //remove item from the basket...
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    }
    return (
        <div className="checkoutProducts">
            <img className="checkoutProducts_image" src={image} alt="" />
            <div className="checkoutProducts_info">
                <h3 className="checkoutProduct">{title}</h3>
                <h2 className="checkoutProduct">
                    <span>$</span>
                    <strong>{price}</strong>
                </h2>
                <div className="checkoutProduct">
                    {
                        Array(rating).fill().map((_) => (
                            <span>⭐</span>
                        ))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove from Cart </button>
            </div>
        </div>
    )
}

export default CheckoutProducts;
