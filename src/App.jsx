import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Component/Header';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Header />
			<Outlet />
		</div>
	);
}

export default App;
