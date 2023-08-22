import "./Navbar.css";
import airbnblogo from "../../assets/airbnb-logo.png";

export default function Navbar() {
	return (
		<>
			<nav className="Navbar">
				<a href="/">
					<img className="airbnb" src={airbnblogo} alt="airbnb logo" />
				</a>
			</nav>
		</>
	);
}
