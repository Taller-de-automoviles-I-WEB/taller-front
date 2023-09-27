import cardStyles from './serviceCards.module.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const ServiceCards = ({ img, imgText, title, description, callToAction }) => {
  return (
    <div className={ cardStyles.card }>
      <img src={ img } alt={ imgText } />
      <h2>{ title }</h2>
      <p>{ description }</p>
      <Link to={ '' }>{ callToAction }</Link>
    </div>
  );
};

ServiceCards.propTypes = {
  img: PropTypes.string.isRequired,
  imgText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  callToAction: PropTypes.string.isRequired
}

export default ServiceCards