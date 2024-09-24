import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

export default function Leaderboard() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://mpl-be-p5xf.onrender.com/teams/getTeamsByScore')
      .then((response) => response.json())
      .then((data) => {
        const sortedTeams = data.sort((a, b) => b.score - a.score);
        setTeams(sortedTeams);
      })
      .catch((error) => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div id="Container" className="flex column">
      <Navbar />
      <div id="bodyContainer">
        <div id="huntSection" className="flex column">
          <p className="titleHeadText">Leaderboard</p>
          <div id="clueSection" className="flex row">
         
            <div id="leadertableSection">
              <table className="tbl" id="leaderboardtable">
                <thead>
                  <tr className="headerRow">
                    <th>Rank</th>
                    <th>Team Name</th>
                    <th>Points</th>
                  </tr>
                </thead>
                <tbody>
                  {teams.map((team, index) => (
                    <tr key={team.team_id}>
                      <td className="bold">{index + 1}</td>
                      <td>{team.team_name}</td>
                      <td>{team.score.toLocaleString()} Points</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
