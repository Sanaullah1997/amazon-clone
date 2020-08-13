import React from 'react'
import './product.css';
import { useStateValue } from './StateProvider';

function Product({ id, price, title, rating, image }) {

    // eslint-disable-next-line no-empty-pattern
    const [{ }, dispatch] = useStateValue();

    const addToBasket = () => {
        //Add item to the basket...
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                price: price,
                image: image,
                rating: rating,
            },
        });
    };
    return (
        <div className="product">
            <div key={id} className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(rating).fill().map((_) => (
                            <span>⭐</span>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product;
