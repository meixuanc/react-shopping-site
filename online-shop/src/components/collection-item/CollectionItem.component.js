import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/CustomButton.component';
import './CollectionItem.styles.scss';

function CollectionItem({ item, addItem }) {
    const { name, imageUrl, price } = item;
    return (
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="content">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>
                Add to Cart
            </CustomButton>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
