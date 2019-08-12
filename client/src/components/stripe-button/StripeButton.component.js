import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import dragon_icon from '../../assets/dragon.svg';
import { connect } from 'react-redux';
import { clearItemFromCart } from '../../redux/cart/cart.actions';
import axios from 'axios';

const StripeButton = ({ price, cartItems, clearItem }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_kOkZcMWedcfIHNfWob9ALgZW00vdWrmkXz';
    const onToken = (token) => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        })
            .then((response) => {
                alert('Payment Successful');
                cartItems.map((cartItem) => clearItem(cartItem));
            })
            .catch((error) => {
                console.log('Payment error: ', JSON.parse(error));
                alert('There was an issue with your payment. Please sure you use the provided credit card');
            });
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

const mapDispatchToProps = (dispatch) => ({
    clearItem: (item) => dispatch(clearItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(StripeButton);
