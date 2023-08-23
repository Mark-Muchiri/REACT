import "./App.css";
import Card from "./components/card/Card";
import Hero from "./components/hero/Hero";
import Navbar from "./components/nav/Navbar";
import cardData from "./data/data";

// ! changed the country key to location
/*
*	Challenge:

*	- import the array of data from data.js
*	- map over the array to create <Card /> components
*	- display the array of card components under the navbar
*	(in place of the current <Card /> component)

*	Note: We haven't styled the group of components yet, so they'll
*	still be block elements, stacked vertically. We'll add styling later.
*/

export default function App() {
	const data = cardData.map(function (info, index) {
		return (
			<Card
				key={index}
				img={info.coverImg}
				rating={info.stats.rating}
				reviewCount={info.stats.reviewCount}
				country={info.location}
				title={info.title}
				price={info.price}
			/>
		);
	});

	return (
		<>
			<link
				href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap"
				rel="stylesheet"
			></link>
			<Navbar />
			<Hero />
			{data}
		</>
	);
}
