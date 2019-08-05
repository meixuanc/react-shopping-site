import React, { Component } from 'react';
import SHOP_DATA from './shopData';
import CollectionPreview from '../../components/collection-preview/CollectionPreview.component';

export default class ShopPage extends Component {
	static defaultProps = { collections: SHOP_DATA };
	render() {
		return (
			<div className="shop-page">
				{this.props.collections.map((collection) => <CollectionPreview key={collection.id} {...collection} />)}
			</div>
		);
	}
}
