import React from 'react'
import './subtotal.css';
import FormatCurrency from "react-currency-format";
import { useStateValue } from './StateProvider';
// import getBasketTotal from './reducer';

function SubTotal() {

    const [{ basket }] = useStateValue();

    return (
        <div className="subtotal">
            {/* Price */}
            <FormatCurrency
                renderText={(value) => (
                    <div>
                        <p>
                            Subtotal ({basket.length} items): <strong>{`${value}`} </strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" />This order contains some gift.
                </small>
                    </div>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal;
