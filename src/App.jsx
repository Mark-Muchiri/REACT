import "./App.css";
import ReactLogo from "./assets/react.svg";

/**
Challenge: 

- Move the `header` element from Page into 
its own component called "Header"
- Move the `footer` into its own component called "Footer" 
and render that component inside the Page component.
- Move the `h1` and `ol` together into another component 
called "MainContent" and render inside Page as well.
*/
function Header() {
	return (
		<header>
			<nav>
				<img src={ReactLogo} width="50px" />
			</nav>
		</header>
	);
}

function Footer() {
	return (
		<footer>
			<small>© 2021 Ziroll development. All rights reserved.</small>
		</footer>
	);
}

function MainContent() {
	return (
		<>
			<h1>Reasons I love React</h1>
			<ol>
				<li>{"It's simple to use compared to .html"}</li>
				<li>Makes the project easily mainainable</li>
				<li>React introduces reusable components</li>
			</ol>
		</>
	);
}

// App component is the parent component
// Header, MainContent and Footer are the children components
export default function App() {
	return (
		<>
			<Header />
			<MainContent />
			<Footer />
		</>
	);
}
