import React from 'react';

const Card = (props) => {
    const cart = props.cart
    
    let total =0 ;
    for (let i=0; i< cart.length; i++){
        const product = cart[i];
        total = total +product.price;
    }
    
    let shipping = 0;
    if (total> 35){
        shipping = 0;
    }
    else if ( total > 0){
        shipping= 4.99;
    }
    else if ( total > 15){
        shipping = 12.99
    }
    const tax = total /10 ;
    const grandTotal = (total + shipping +Number (tax)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number (precision);
    }
     
        return (
        <div>
            <h4>Order summery</h4>
            <p>Item Ordered:{cart.length} </p>
        <p>Product Price: {formatNumber(total)}</p>
        <p><small>Shipping Cost : {shipping}</small></p>
        <p><small> TAx+VAT: {formatNumber(tax)} </small></p>
        <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Card;