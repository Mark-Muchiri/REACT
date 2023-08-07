import "./App.css";
import ReactLogo from "./assets/react.svg";

/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

*/

function App() {
	return (
		<>
			<img src={ReactLogo} alt="" />
			<h1>Reasons I love React</h1>
			<ol>
				<li>It is simple to use compared to .html</li>
				<li>Makes the project easily mainainable</li>
				<li>React introduces reusable components</li>
			</ol>
		</>
	);
}

export default App;
