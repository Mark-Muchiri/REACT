import "./App.css";
import Card from "./components/card/Card";
import Hero from "./components/hero/Hero";
import Navbar from "./components/nav/Navbar";
import cardData from "./data/data";

export default function App() {
	// This maps through app the objects in the cardData
	const data = cardData.map((item) => {
		// key={item.id} is just there to avoid a react error
		return <Card key={item.id} item={item} />;
	});
	// This consoles all the data that's presented in `const = data`
	// Tip: To see the console.log in vscode, use the extension 'Console Ninja'
	console.log(data);

	return (
		<>
			{/* This are the fonts being used in this project */}
			<link
				href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap"
				rel="stylesheet"
			></link>
			<Navbar />
			<Hero />
			{/* This is the card prop being used. From here refer to the file Card.jsx to see the flow of data */}
			<section className="card-list">{data}</section>
		</>
	);
}
