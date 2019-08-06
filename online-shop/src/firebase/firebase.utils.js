import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyBgwFW49_T24Sl1n3phWZmNwqDl21ZZcHw',
    authDomain: 'dragon-db.firebaseapp.com',
    databaseURL: 'https://dragon-db.firebaseio.com',
    projectId: 'dragon-db',
    storageBucket: '',
    messagingSenderId: '642325823526',
    appId: '1:642325823526:web:aa0a033e5c7a9261'
};

firebase.initializeApp(config);

const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

const auth = firebase.auth();
const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
const signInWithGoogle = () => auth.signInWithPopup(provider);

export { auth, firestore, provider, signInWithGoogle, createUserProfileDocument };
export default firebase;
