export default function Navbar() {
	return (
		<nav>
			<div className='logo-name'>
				<img
					className='logo'
					src='./src/assets/icons/rick-icon.png'
					alt=''
				/>
				<h1>MEMORICK</h1>
			</div>
			<h1 className='scores'>Score: 0 | Highest Score: 0</h1>
		</nav>
	);
}
