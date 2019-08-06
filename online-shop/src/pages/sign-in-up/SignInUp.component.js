import React from 'react';
import SignIn from '../../components/sign-in/SignIn.component';
import SignUp from '../../components/sign-up/SignUp.component';
import './SignInUp.styles.scss';

const SignInUp = () => {
	return (
		<div className="signin-signup">
			<SignIn />
			<SignUp />
		</div>
	);
};

export default SignInUp;
