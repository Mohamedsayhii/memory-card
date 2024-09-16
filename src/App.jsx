import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
	const [score, setScore] = useState(0);
	const [highestScore, setHighestScore] = useState(0);

	return (
		<>
			<Navbar />
			<Main />
			<Footer />
		</>
	);
}

export default App;
