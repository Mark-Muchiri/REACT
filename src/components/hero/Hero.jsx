import "./Hero.css";
import gallery from '../../assets/photo-grid.png'

export default function Hero() {
	return (
		<>
            <div className="heroimg">
                <img className="gallery" src={gallery} alt="top gallery image" />
            </div>
            <div className="herotext">
                <h2 className="headhead">Online Experiences</h2>
                <p className="herop">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
		</>
	);
}
