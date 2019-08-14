import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import Header from './components/header/Header.component';
import Spinner from './components/spinner/Spinner.component';
import ErrorBoundary from './components/error-boundary/ErrorBoundary.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { GlobalStyle } from './global.styles';

const HomePage = lazy(() => import('./pages/homepage/HomePage.component'));
const ShopPage = lazy(() => import('./pages/shop/ShopPage.component'));
const SignInUp = lazy(() => import('./pages/sign-in-up/SignInUp.component'));
const CheckOutPage = lazy(() => import('./pages/checkout/CheckOut.component'));

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
            <ErrorBoundary>
                <Suspense fallback={<Spinner />}>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/shop" component={ShopPage} />
                        <Route exact path="/checkout" component={CheckOutPage} />
                        <Route exact path="/signin" render={() => (currentUser ? <Redirect to="/" /> : <SignInUp />)} />
                        <Route render={() => <ErrorBoundary error={true} />} />
                    </Switch>
                </Suspense>
            </ErrorBoundary>
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
