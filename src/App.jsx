import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Main from './components/Main';

const apiData = async (url) => {
	try {
		const response = await fetch(url);
		const json = await response.json();
		return json;
	} catch (err) {
		console.log(err);
	}
};

const getRandomCharacters = (url) => {
	const randomCharactersIds = Array.from({ length: 10 }, () =>
		Math.floor(Math.random() * 826)
	);
	for (let i = 0; i < randomCharactersIds.length; i++) {
		url += `${randomCharactersIds[i]},`;
	}

	return url;
};

function App() {
	const [score, setScore] = useState(0);
	const [highestScore, setHighestScore] = useState(0);
	const [cards, setCards] = useState([]);
	console.log(cards);

	useEffect(() => {
		const data = apiData(
			getRandomCharacters('https://rickandmortyapi.com/api/character/')
		);
		data.then((response) => setCards(response));
	}, []);

	return (
		<>
			<Navbar />
			<Main />
			<Footer />
		</>
	);
}

export default App;
