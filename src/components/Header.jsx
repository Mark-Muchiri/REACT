import ReactLogo from "../assets/react-logo.png";

export default function Header() {
	return (
		<header className="navshadow">
			<nav className="nav">
				<img className="logo" src={ReactLogo} />
				<ul className="nav-items">
					<li className="navlist">Pricing</li>
					<li className="navlist">About</li>
					<li className="navlist">Contact</li>
				</ul>
			</nav>
		</header>
	);
}