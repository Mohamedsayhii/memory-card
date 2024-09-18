export default function Navbar({ score, highestScore }) {
	return (
		<nav>
			<div className='logo-name'>
				<img
					className='logo'
					src='./src/assets/icons/rick-icon.png'
					alt=''
				/>
				<h1 className='name'>MEMORICK</h1>
			</div>
			<h1 className='scores'>
				Score: {score} | Highest Score: {highestScore}
			</h1>
		</nav>
	);
}
