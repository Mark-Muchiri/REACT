import './Jokes.css'
import PropTypes from 'prop-types';

export default function Jokes(props) {
	Jokes.propTypes = {
		setup: PropTypes.string.isRequired,
		punchline: PropTypes.string.isRequired
	};
	return (
        <>
            <div className="container-position">
			<div className="jokes-container">
				<p>{props.setup}{props.punchline}</p>
			</div>
            </div>
		</>
	);
}
