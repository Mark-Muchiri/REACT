import "./Card.css";
// import star from "../../assets/star.png";
import propTypes from "prop-types";

export default function Card(props) {
	Card.propTypes = {
		img: propTypes.string.isRequired,
		rating: propTypes.string.isRequired,
		reviewCount: propTypes.string.isRequired,
		country: propTypes.string.isRequired,
		title: propTypes.string.isRequired,
		price: propTypes.string.isRequired,
	};

	return (
		<>
			<div className="cards-position">
				<div className="card-container">
					<div className="image-container">
						<div className="soldout-container">
							<p className="soldout">Sold out</p>
						</div>
						<img className="card-image" src={props.img} alt="" />
					</div>
					<div className="rating-container">
						<p>
							<img className="star" src='../../../public/images/star.png' alt="" />{" "}
							<a className="R-number">{props.rating}</a>{" "}
							<a className="R-sidetext">
								{props.reviewCount} - {props.country}
							</a>
						</p>
					</div>
					<div className="text-container">
						<p className="lesson">
							{props.title}
						</p>
						<p className="price">
							<a className="from">From ${props.price}</a>{" "}
							<a className="person">/ person</a>
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
