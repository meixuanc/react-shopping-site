import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/ShopPage.component';

function App() {
	return (
		<Switch>
			<Route exact path="/" render={(routerProps) => <HomePage />} />
			<Route exact path="/shop" render={(routerProps) => <ShopPage />} />
		</Switch>
	);
}

export default App;
