import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './CollectionsOverview.styles.scss';
import { selectCollectionForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../../components/collection-preview/CollectionPreview.component';

const CollectionsOverview = ({ collections }) => {
    return (
        <div className="collection-overview">
            {collections.map((collection) => <CollectionPreview key={collection.id} {...collection} />)}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
