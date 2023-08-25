import "./Card.css";
import propTypes from "prop-types";

export default function Card(props) {
	Card.propTypes = {
		item: propTypes.shape({
			coverImg: propTypes.string.isRequired,
			country: propTypes.string.isRequired,
			title: propTypes.string.isRequired,
			price: propTypes.string.isRequired,
			openSpots: propTypes.number.isRequired,
			location: propTypes.string.isRequired,
			status: propTypes.string.isRequired,
			stats: propTypes.shape({
				rating: propTypes.string.isRequired,
				reviewCount: propTypes.string.isRequired,
			}).isRequired,
		}).isRequired,
	};
	console.log(props);
	console.log(props.item);
	return (
		<>
			<div className="cards-position">
				<div className="card-container">
					<div className="image-container">
						{/* ********* Conditional prop ********* */}
						{/* This provides functionality for the badges */}
						{props.item.status === "online" &&
						props.item.openSpots >= 1 ? (
							<div className="online-container">
								<p className="online">ONLINE</p>
							</div>
						) : props.item.openSpots >= 1 ? (
							<div className="not-soldout-container">
								<p className="not-soldout">
									{props.item.openSpots}
								</p>
							</div>
						) : (
							<div className="soldout-container">
								<p className="soldout">SOLD OUT</p>
							</div>
						)}

						<img
							className="card-image"
							src={props.item.coverImg}
							alt=""
						/>
					</div>
					<div className="rating-container">
						<p>
							<img
								className="star"
								src="../../../public/images/star.png"
								alt=""
							/>
							<a className="R-number">
								{props.item.stats.rating}
							</a>
							<a className="R-sidetext">
								({props.item.stats.reviewCount}) -
								{props.item.location}
							</a>
						</p>
					</div>
					<div className="text-container">
						<p className="lesson">{props.item.title}</p>
						<p className="price">
							<a className="from">From ${props.item.price}</a>
							<a className="person">/ person</a>
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
