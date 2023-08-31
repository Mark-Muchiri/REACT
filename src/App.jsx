import "./App.css";
import Card from "./components/card/Card";
import Hero from "./components/hero/Hero";
import Navbar from "./components/nav/Navbar";
import cardData from "./data/data";

export default function App() {
	const data = cardData.map((item) => {
		// key={item.id} is just there to avoid a react error
		return <Card key={item.id} item={item} />;
	});
	console.log(data);


	return (
		<>
			<link
				href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap"
				rel="stylesheet"
			></link>
			<Navbar />
			<Hero />
			<section className="card-list">{data}</section>
		</>
	);
}
