export default function Card({ key, name, image }) {
	return (
		<div className='card'>
			<img src={image} alt='' />
			<h2 className='character-name'>{name}</h2>
		</div>
	);
}
