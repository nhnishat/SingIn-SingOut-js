import {
	GithubAuthProvider,
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signOut,
} from 'firebase/auth';
import React, { useState } from 'react';
import app from '../FireBase/__SetFireBase';

const Login = () => {
	const [users, setUsers] = useState({});
	const auth = getAuth(app);
	const googleProvider = new GoogleAuthProvider();
	const githubProvider = new GithubAuthProvider();

	const handleGoogleSingIn = () => {
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				const user = result.user;
				setUsers(user);
			})
			.catch((error) => {
				console.log('error', error.message);
			});
	};
	console.log(users);
	const handleSingOut = () => {
		signOut(auth)
			.then((result) => {
				setUsers(null);
				console.log(result);
			})
			.catch((error) => console.log(error));
	};
	const handleGithubSingIn = () => {
		signInWithPopup(auth, githubProvider)
			.then((result) => {
				const user = result.user;
				setUsers(user);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div>
			{!users ? (
				<button onClick={handleSingOut}>Sing out</button>
			) : (
				<>
					<button onClick={handleGoogleSingIn}>Google Login</button>
					<button onClick={handleGithubSingIn}>Github Login</button>
				</>
			)}

			{users && (
				<div>
					<h3>Name : {users?.displayName}</h3>
					<p>Email : {users.email}</p>
					<img src={users.photoURL} alt="" />
				</div>
			)}
		</div>
	);
};

export default Login;
