import React from 'react'
import './product.css';

function Product({id, price, title, rating, image}) {
    return (
        <div className="product">
        <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
            <small>$</small>
            <strong>{price}</strong>
            </p>
            <div className="product_rating">
            {
                Array(rating).fill().map((_)=> (
                    <span>⭐</span>
                ))
            }
            </div>
        </div>
            <img src={image} alt="" />
            <button>Add to Cart</button>
        </div>
    )
}

export default Product;
