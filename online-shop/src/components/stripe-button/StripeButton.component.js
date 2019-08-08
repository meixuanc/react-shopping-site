import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import dragon_icon from '../../assets/dragon.svg';

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_kOkZcMWedcfIHNfWob9ALgZW00vdWrmkXz';
    const onToken = (token) => {
        alert('Payment Successfull');
    };
    return (
        <StripeCheckout
            label="Pay Now"
            name="Dragon Clothing Co."
            billingAddress
            shippingAddress
            image={dragon_icon}
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeButton;
