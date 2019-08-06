import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header.component';
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/ShopPage.component';
import SignInUp from './pages/sign-in-up/SignInUp.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
	state = {
		currentUser: null
	};

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapshot) => {
					this.setState({
						currentUser: {
							id: snapshot.id,
							...snapshot.data()
						}
					});
				});
			} else {
				this.setState({ currentUser: null });
			}
		});
	}

	componentWillUnmount = () => {
		this.unsubscribeFromAuth();
	};

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" render={(routerProps) => <HomePage />} />
					<Route exact path="/shop" render={(routerProps) => <ShopPage />} />
					<Route exact path="/signin" render={(routerProps) => <SignInUp />} />
				</Switch>
			</div>
		);
	}
}

export default App;
