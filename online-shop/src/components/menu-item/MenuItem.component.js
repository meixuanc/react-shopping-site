import React from 'react';
import { withRouter } from 'react-router-dom';
import './MenuItem.styles.scss';

const MenuItem = (props) => {
	const { section, history, match } = props;
	const { title, imageUrl, size, linkUrl } = section;
	return (
		<div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl.toLowerCase()}`)}>
			<div
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
				className="background-image"
			/>
			<div className="content">
				<h1 className="title">{title}</h1>
				<span className="subtitle">SHOP</span>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);
