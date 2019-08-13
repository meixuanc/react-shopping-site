import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import Header from './components/header/Header.component';
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/ShopPage.component';
import SignInUp from './pages/sign-in-up/SignInUp.component';
import CheckOutPage from './pages/checkout/CheckOut.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { GlobalStyle } from './global.styles';

const App = ({ currentUser, setCurrentUser }) => {
    useEffect(
        () => {
            const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
                if (userAuth) {
                    const userRef = await createUserProfileDocument(userAuth);
                    userRef.onSnapshot((snapshot) => {
                        setCurrentUser({
                            id: snapshot.id,
                            ...snapshot.data()
                        });
                    });
                } else {
                    setCurrentUser(null);
                }
            });
            return () => {
                unsubscribeFromAuth();
            };
        },
        [ setCurrentUser ]
    );

    return (
        <div>
            <GlobalStyle />
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
                <Route exact path="/checkout" component={CheckOutPage} />
                <Route exact path="/signin" render={() => (currentUser ? <Redirect to="/" /> : <SignInUp />)} />
                <Route render={() => <h1>The page you looking for is not exist</h1>} />
            </Switch>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
