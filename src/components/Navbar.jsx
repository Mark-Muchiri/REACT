import reacticon from "../assets/react-icon-small.png";
export default function Navbar() {
	return (
		<div className="nav">
			{/* Logo */}
			<div className="logo">
				<img className="reacticon" src={reacticon} alt="" />
				<h3 className="logotext">ReactFacts</h3>
            </div>
            {/* List */}
            <div className="listsection">
			<h3 className="navlist">React Course - Project 1</h3>
            </div>
		</div>
	);
}
