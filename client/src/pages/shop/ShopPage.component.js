import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionsOverviewContainer from '../../components/collections-overview/CollectionsOverview.container';
import CollectionPageContainer from '../collection/Collection.container';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

const ShopPage = ({ match, fetchCollectionsStartAsync }) => {
    useEffect(
        () => {
            fetchCollectionsStartAsync();
        },
        [ fetchCollectionsStartAsync ]
    );

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:categoryId`} component={CollectionPageContainer} />
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
