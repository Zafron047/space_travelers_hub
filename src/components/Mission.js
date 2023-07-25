import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({ mission }) => (
  <tr>
    <td className="mission-name">{mission.mission_name}</td>
    <td className="mission-desc">{mission.description}</td>
    <td className="not-member">
      <span className="member" type="button">NOT A MEMBER</span>
    </td>
    <td className="join-td">
      <button className="join" type="button">Join Mission</button>
    </td>
  </tr>
);

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Mission;
