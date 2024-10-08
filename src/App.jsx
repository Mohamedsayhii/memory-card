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
	const uniqueRandomIds = new Set();
	while (uniqueRandomIds.size < 10) {
		uniqueRandomIds.add(Math.floor(Math.random() * 826) + 1);
	}

	const randomCharactersIds = Array.from(uniqueRandomIds);
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
			setScore((prevScore) => {
				const newScore = prevScore + 1;
				if (newScore > highestScore) {
					setHighestScore(newScore);
				}
				return newScore;
			});
		} else {
			setSelectedCardsIds([]);
			setScore(0);
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
