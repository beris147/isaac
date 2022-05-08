import { FirebaseApp, initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { firebaseConfig } from 'session/firebase/firebaseConfig';

export const app: FirebaseApp = initializeApp(firebaseConfig);

export const auth: Auth = getAuth(app);
