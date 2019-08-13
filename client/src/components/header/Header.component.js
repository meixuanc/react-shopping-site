import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { ReactComponent as Logo } from '../../assets/dragon.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/CartIcon.component';
import CartDropdown from '../cart-dropdown/CartDropdown.component';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './Header.styles';

const Header = ({ currentUser, hidden }) => {
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">Shop</OptionLink>
                {/* <OptionLink to="/contact">Contact</OptionLink> */}
                {currentUser ? (
                    <>
                        <OptionLink as="div">Welcome, {currentUser.displayName}</OptionLink>
                        <OptionLink as="div" onClick={() => auth.signOut()}>
                            Sign Out
                        </OptionLink>
                    </>
                ) : (
                    <OptionLink to="/signin">Sign In</OptionLink>
                )}
                <CartIcon />
            </OptionsContainer>
            {hidden ? null : <CartDropdown />}
        </HeaderContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
