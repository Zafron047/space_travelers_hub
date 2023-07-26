import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBooking, leaveBooking } from '../redux/rockets/rocketSlice';

const RocketList = ({ rocket }) => {
  const dispatch = useDispatch();

  const handleBooking = () => {
    dispatch(addBooking());
  };

  const handleLeaving = () => {
    dispatch(leaveBooking());
  };
  return (
    <li className="list" key={rocket.id}>
      {rocket.flickr_images.length > 0 && (
        <img
          className="list-img"
          src={rocket.flickr_images[0]}
          alt={rocket.rocket_name}
        />
      )}
      <div>
        <h3>{rocket.rocket_name}</h3>
        <p>{rocket.description}</p>
        <div>
          {if (rocket.booked){
            <button onClick={handleBooking} type="button">
              Reserve Rocket
            </button>
          }else {
            <button onClick={handleLeaving} type="button">
              Reserve Rocket
            </button>
          }}
        </div>  
      </div>
    </li>
  );
};

RocketList.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default RocketList;
