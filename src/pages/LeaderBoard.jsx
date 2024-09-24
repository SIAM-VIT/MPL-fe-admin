import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

export default function Leaderboard() {
  const [teams, setTeams] = useState([]);

  // Fetch teams data from the API
  useEffect(() => {
    fetch('https://mpl-be-p5xf.onrender.com/teams/getTeamsByScore')
      .then((response) => response.json())
      .then((data) => {
        // Sort teams by score in descending order
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
            {/* <div id="leaderboardContainer" className="flex column">
              {teams.slice(0, 3).map((team, index) => (
                <div key={team.team_id} className="leaderBox flex row">
                  <div id={`rank${index + 1}`} className="rankBox flex centerVH">
                    <p className="rank">{index + 1}</p>
                  </div>
                  <div className="rankDetailBox flex column centerVH">
                    <button className="btn_lite purpleShade">{team.team_name}</button>
                    <p className="bold">{team.score.toLocaleString()} Pts.</p>
                  </div>
                </div>
              ))} */}
            {/* </div> */}
            <div id="leadertableSection">
              {/* Render full leaderboard */}
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
