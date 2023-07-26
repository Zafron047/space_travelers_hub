import React from 'react';
import PropTypes from 'prop-types';

const RocketList = ({ rocket }) => (
  <li className="list" key={rocket.id}>
    {rocket.flickr_images.length > 0 && (
      <img className="list-img" src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
    )}
    <div>
      <h3>{rocket.rocket_name}</h3>
      <p>
        {rocket.description}
      </p>
    </div>
  </li>
);

RocketList.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default RocketList;
