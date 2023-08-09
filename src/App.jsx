import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

/**
Challenge: move the Footer and MainContent components
into their own files.
*/

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
