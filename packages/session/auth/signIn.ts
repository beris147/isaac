import firebase from 'firebase/auth';
import { auth } from 'session/firebase/main';

import type { User, UserCredential } from 'types/user';

export const signInWithEmailAndPassword = (email: string, password: string) => {
	firebase
		.signInWithEmailAndPassword(auth, email, password)
		.then((userCredential: UserCredential) => {
			console.log(userCredential.user);
		})
		.catch((error) => {
			console.log(error);
		});
};
