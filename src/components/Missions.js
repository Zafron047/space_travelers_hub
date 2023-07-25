import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionsSlice';
import Mission from './Mission';
import './styles/Missions.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    if (dataFetched === false) {
      dispatch(fetchMissions());
      setDataFetched(true);
    }
  }, [dispatch, dataFetched]);

  return (

    <div>
      <table className="missions-table">
        <thead className="missions-table-header">
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <Mission key={mission.mission_id} mission={mission} />
          ))}
        </tbody>
      </table>
    </div>

  );
};

export default Missions;
