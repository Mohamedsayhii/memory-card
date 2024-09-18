import Card from './Card';

export default function Main({ cards }) {
	return (
		<main>
			{cards.map((card) => (
				<Card key={card.id} name={card.name} image={card.image} />
			))}
		</main>
	);
}
