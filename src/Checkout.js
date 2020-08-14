import React from 'react'
import { useStateValue } from './StateProvider'
import './checkout.css';
import CheckoutProducts from './CheckoutProducts';
import SubTotal from './SubTotal';

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                {basket.length === 0 ? (
                    <h2>Your Cart is Empty!!!</h2>
                ) :
                    (
                        <div>
                            <h2 className="checkout_title">Your shopping cart contains:)</h2>
                            <p className="checkout_line"></p>
                            {/* List out all of the Checkout Products. */}
                            {basket.map(item => (
                                <CheckoutProducts
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                    )}
            </div>
            {basket.length > 0 && (
                <div className="checkeout_rigth">
                    <SubTotal />
                    {/* Subtotal details here... */}

                </div>
            )}
        </div>
    )
}

export default Checkout;
