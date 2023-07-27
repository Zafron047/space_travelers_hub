import React from 'react';
import { useSelector } from 'react-redux';
import './styles/Profile.css';

/* eslint-disable max-len */
const Profile = () => {
  const missions = useSelector((state) => state.missions.missions);
  const joinedMissions = useSelector((state) => state.missions.joinedMissions);

  const myJoinedMissions = missions.filter((mission) => joinedMissions.includes(mission.mission_id));
  return (
    <div className="profile">
      <h2 className="my-missions">My Missions</h2>
      {myJoinedMissions.length === 0 ? (
        <p>No joined missions yet.</p>
      ) : (
        <ul className="my-missions-ul">
          {myJoinedMissions.map((mission) => (
            <li className="my-missions-li" key={mission.mission_id}>
              <h4 className="my-missions-name">{mission.mission_name}</h4>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Profile;
