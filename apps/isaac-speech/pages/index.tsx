import { getUserSession } from 'session/auth/signUp';
import { Button } from 'ui';

const signInHandler = () => {
	alert('sign in!');
};

const Index = () => {
	const user = getUserSession();
	return (
		<>
			{user && (
				<>
					<h1>Logged in</h1>
					<Button>Log Out</Button>
				</>
			)}
			{!user && (
				<>
					<h2>You should log in</h2>
					<Button onClick={signInHandler}>Sign in</Button>
					<Button onClick={signInHandler}>Log in</Button>
				</>
			)}
		</>
	);
};

export default Index;
