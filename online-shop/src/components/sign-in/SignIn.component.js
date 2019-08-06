import React, { Component } from 'react';
import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './SignIn.styles.scss';

export default class SignIn extends Component {
	state = {
		email: '',
		password: ''
	};

	handleSubmit = async (event) => {
		event.preventDefault();
		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (error) {
			console.log(error);
		}
	};

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						handleChange={this.handleChange}
						name="email"
						type="email"
						label="Email"
						value={this.state.email}
						required
					/>
					<FormInput
						handleChange={this.handleChange}
						name="password"
						type="password"
						label="Password"
						value={this.state.password}
						required
					/>
					<div className="buttons">
						<CustomButton type="submit">Sign In</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign In With Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}
