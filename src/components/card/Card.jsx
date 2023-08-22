import "./Card.css";
import cardimg from "../../assets/katie-zaferes.png";
import star from "../../assets/star.png";

export default function Card() {
	return (
		<>
			<div className="cards-position">
				<div className="card-container">
					<div className="image-container">
						<div className="soldout-container">
							<p className="soldout">Sold out</p>
						</div>
						<img className="card-image" src={cardimg} alt="" />
					</div>
					<div className="rating-container">
						<p>
							<img className="star" src={star} alt="" />{" "}
							<a className="R-number">5.0</a>{" "}
							<a className="R-sidetext">(6) - USA</a>{" "}
						</p>
					</div>
					<div className="text-container">
						<p className="lesson">
							Life lessons with Katie Zaferes
						</p>
						<p className="price">
							<a className="from">From $136</a>{" "}
							<a className="person">/ person</a>
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
