import "./App.css";
import Jokes from "./components/Jokes";

export default function App() {
	return (
		<>
			<div className="container">
				<Jokes
					setup="1. If you don't pass in a 'question' prop, "
					punchline="how might you make it only 
				show the punchline"
				/>
				<Jokes
					setup="2. If you don't pass in a 'question' prop, "
					punchline="how might you make it only 
				show the punchline"
				/>
				<Jokes
					setup="3. If you don't pass in a 'question' prop, "
					punchline="how might you make it only 
				show the punchline"
				/>
				<Jokes
					setup="4. If you don't pass in a 'question' prop, "
					punchline="how might you make it only 
				show the punchline"
				/>
			</div>
		</>
	);
}
