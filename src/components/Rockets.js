// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets } from '../redux/rockets/rocketSlice';

const Rockets = () => {
  const rocketArr = useSelector((state) => state.rockets);
  const isLoading = useSelector((state) => state.rockets.isLoading);
  console.log('This is Rockets', rocketArr);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div>
      <h2>Rockets List</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {rocketArr.rocketArr.map((rocket) => (
            <li key={rocket.id}>
              {rocket.flickr_images.length > 0 && (
              <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
              )}
              <h3>{rocket.rocket_name}</h3>
              <p>
                {rocket.description}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Rockets;
