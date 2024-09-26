import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

export default function Treasurehunt() {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedClue, setSelectedClue] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const response = await fetch(
        "https://mpl-be-p5xf.onrender.com/teams/getAllTeams"
      );
      const data = await response.json();
      setTeams(data);
    } catch (error) {
      console.error("Error fetching teams:", error);
      setMessage("Error fetching teams. Please try again.");
    }
  };

  const handleClueClick = (clue) => {
    setSelectedClue(clue);
  };

  const handleVerifyClue = async () => {
    if (!selectedTeam || !selectedClue) {
      setMessage("Please select a team and a clue first.");
      return;
    }

    const team = teams.find((t) => t.team_name === selectedTeam);
    if (!team) {
      setMessage("Selected team not found.");
      return;
    }

    try {
      const response = await fetch(
        `https://mpl-be-p5xf.onrender.com/teams/updateHint/${team.team_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ hint: selectedClue }),
        }
      );

      if (response.ok) {
        setMessage("Clue verified successfully!");
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.message || "Failed to verify clue."}`);
      }
    } catch (error) {
      console.error("Error verifying clue:", error);
      setMessage("Error verifying clue. Please try again.");
    }
  };

  return (
    <div id="Container" className="flex column">
      <Navbar widthClass="custom-width2" />
      <div id="bodyContainer">
        <div id="huntSection" className="flex column">
          <p className="titleHeadText">Treasure Hunt - Update Team Hint</p>
          <div id="clueSection" className="flex row">
            <div id="clueForm" className="flex column">
              <div className="inputBoxContainer flex row space-between align_items_center">
                <p className="inputTitle">Team Name</p>
                <select
                  className="inputBox"
                  value={selectedTeam}
                  onChange={(e) => setSelectedTeam(e.target.value)}
                >
                  <option value="">Select a team</option>
                  {teams.map((team) => (
                    <option key={team.team_id} value={team.team_name}>
                      {team.team_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inputBoxContainer flex row space-between align_items_center">
                <p className="inputTitle">Clue No</p>
                <div id="clueBoxContainer" className="flex row">
                  {[1, 2, 3, 4, 5].map((clue) => (
                    <div
                      key={clue}
                      className={`clueBox flex centerVH ${
                        selectedClue === clue ? "selected" : ""
                      }`}
                      id={`Cbox${clue}`}
                      onClick={() => handleClueClick(clue)}
                    >
                      <p className="clueno">{clue}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex row" id="clueFormBtnContainer">
                <button className="btn_lite purpleShade">VIEW PROGRESS</button>
                <button
                  className="btn_lite purpleShade"
                  onClick={handleVerifyClue}
                >
                  VERIFY CLUE
                </button>
              </div>
              <p className="message">{message}</p>
            </div>
          </div>
        </div>
      </div>
      <div id="bgSection" className="patternBg"></div>
    </div>
  );
}
