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
		Math.floor(Math.random() * 826) + 1
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
	const [selectedCardsIds, setSelectedCardsIds] = useState([]);

	function incrementScore(cardId) {
		if (!selectedCardsIds.includes(cardId)) {
			setSelectedCardsIds((prevCardsIds) => [...prevCardsIds, cardId]);
			setScore((prevScore) => prevScore + 1);
		} else {
			setSelectedCardsIds([]);
			setScore(0);
		}
	}

	function highScore() {
		if (score >= highestScore) {
			setHighestScore(score);
		}
	}

	useEffect(() => {
		let ignore = false;

		const data = apiData(
			getRandomCharacters('https://rickandmortyapi.com/api/character/')
		);
		data.then((response) => {
			if (!ignore) setCards(response);
		});

		highScore();

		return () => {
			ignore = true;
		};
	}, [score]);

	return (
		<>
			<Navbar score={score} highestScore={highestScore} />
			<Main cards={cards} incrementScore={incrementScore} />
			<Footer />
		</>
	);
}

export default App;
