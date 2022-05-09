import firebase from 'firebase/auth';
import { auth } from 'session/firebase/main';

import type { User, UserCredential } from 'types/user';

// export const createUserWithEmailAndPassword = (
// 	email: string,
// 	password: string
// ) => {
// 	firebase
// 		.createUserWithEmailAndPassword(auth, email, password)
// 		.then((userCredential: UserCredential) => {
// 			console.log(userCredential.user);
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 		});
// };

export const getUserSession = (): User | null => {
	return auth.currentUser;
};
