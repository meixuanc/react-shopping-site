import React from 'react';
import './CollectionItem.styles.scss';

export default function CollectionItem({ id, name, imageUrl, price }) {
	return (
		<div className="collection-item">
			<div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className="content">
				<span className="name">{name}</span>
				<span className="price">${price}</span>
			</div>
		</div>
	);
}
