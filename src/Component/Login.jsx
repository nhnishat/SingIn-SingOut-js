import {
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
	const provider = new GoogleAuthProvider();

	const handleGoogleSingIn = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				const user = result.user;
				setUsers(user);
			})
			.catch((error) => {
				console.log('error', error.message);
			});
	};
	const handleSingOut = () => {
		signOut(auth)
			.then((result) => {
				setUsers(null);
				console.log(result);
			})
			.catch((error) => console.log(error));
	};

	return (
		<div>
			<button onClick={handleGoogleSingIn}>Google Login</button>
			<button onClick={handleSingOut}>Sing out</button>

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
