import "./App.css";
import ReactLogo from "./assets/react.svg";

/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and
put them inline with the React logo.
- Change the image styling to happen in CSS instead of in-line
For practice, add a new class to the image in order to style it
*/

function Header() {
	return (
		<header className="navshadow">
			<nav className="nav">
				<img className="logo" src={ReactLogo} />
				<ul className="nav-items">
					<li>Pricing</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</nav>
		</header>
	);
}

function Footer() {
	return (
		<footer className="footer">
			<small className="small">
				© 2021 Muchiri development. All rights reserved.
			</small>
		</footer>
	);
}

function MainContent() {
	return (
		<div className="MainContent">
			<div>
				<h1>{"Reasons I'm excited to learn React"}</h1>
				<ol>
					<li>{"It's simple to use compared to .html"}</li>
					<li>Makes the project easily mainainable</li>
					<li>React introduces reusable components</li>
				</ol>
			</div>
		</div>
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
