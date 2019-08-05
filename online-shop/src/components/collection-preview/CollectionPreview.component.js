import React from 'react';
import './CollectionPreview.styles.scss';
import CollectionItem from '../collection-item/CollectionItem.component';

export default function CollectionPreview({ title, items }) {
	return (
		<div className="collection-preview">
			<h1 className="title">{title}</h1>
			<div className="preview">
				{items.filter((item, idx) => idx < 4).map((item) => <CollectionItem key={item.id} {...item} />)}
			</div>
		</div>
	);
}
