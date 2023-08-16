import React from 'react';
import './MissonPage.css';

import BackButton from './BackButton';
import Participants from './Participants';
import MissionStatus from './MissionStatus';
import MissionCard from './MissionCard';

function MissionPage() {

  const missions = [
    { date: '2023-08-10', name: '김XX', status: 'success' },
    { date: '2023-08-11', name: '이XX', status: 'failure' },
    { date: '2023-08-11', name: '박XX', status: 'failure' },
    { date: '2023-08-11', name: '조XX', status: 'success' }
  ];
  return (
    <div className="mission-page">

      <BackButton />
      <MissionStatus />
      <Participants name={missions[0].name}/>
      <div className="mission-cards">
        {missions.map((mission, index) => (
          <MissionCard
            key={index}
            date={mission.date}
            name={mission.name}
            status={mission.status}
          />
        ))}
      </div>
    </div>
  );
}

export default MissionPage;
