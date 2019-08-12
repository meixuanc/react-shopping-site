import React from 'react';
import { Link } from 'react-router-dom';
import './CollectionPreview.styles.scss';
import CollectionItem from '../collection-item/CollectionItem.component';

const CollectionPreview = ({ title, items, routeName }) => {
    return (
        <div className="collection-preview">
            <Link className="title" to={`/shop/${routeName}`}>
                {title}
            </Link>
            <div className="preview">
                {items.filter((item, idx) => idx < 4).map((item) => <CollectionItem key={item.id} item={item} />)}
            </div>
        </div>
    );
};

export default CollectionPreview;
