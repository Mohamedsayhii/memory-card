import Card from './Card';

export default function Main({ cards, incrementScore }) {
	return (
		<main>
			{cards.map((card) => (
				<Card
					key={card.id}
					id={card.id}
					name={card.name}
					image={card.image}
					incrementScore={incrementScore}
				/>
			))}
		</main>
	);
}
