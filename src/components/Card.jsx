export default function Card({ id, name, image, incrementScore }) {
	return (
		<div className='card' key={id} onClick={() => incrementScore(id)}>
			<img src={image} alt='' />
			<h2 className='character-name'>{name}</h2>
		</div>
	);
}
