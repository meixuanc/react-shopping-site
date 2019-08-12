import React, { useState } from 'react';
import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './SignIn.styles.scss';

const SignIn = () => {
    const [ userCredentials, setCredentials ] = useState({ email: '', password: '' });

    const { email, password } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setCredentials({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (event) => {
        setCredentials({ ...userCredentials, [event.target.name]: event.target.value });
    };

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput handleChange={handleChange} name="email" type="email" label="Email" value={email} required />
                <FormInput
                    handleChange={handleChange}
                    name="password"
                    type="password"
                    label="Password"
                    value={password}
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
};

export default SignIn;
