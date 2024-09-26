import React, { useState } from "react";
import Navbar from "../components/Navbar";
import eventFlow from "../assets/eventflowChart.svg";

export default function Team() {
  const [teamName, setTeamName] = useState("");
  const [leaderName, setLeaderName] = useState("");
  const [member1Name, setMember1Name] = useState("");
  const [member2Name, setMember2Name] = useState("");
  const [member3Name, setMember3Name] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    const teamData = {
      team_name: teamName,
      team_members: [leaderName, member1Name, member2Name, member3Name].filter(
        Boolean
      ),
    };

    try {
      const response = await fetch(
        "https://mpl-be-p5xf.onrender.com/teams/createTeam",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(teamData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create team");
      }

      const result = await response.json();
      console.log("Team created:", result);
      setErrorMessage("Successfully created team");
      setTeamName("");
      setLeaderName("");
      setMember1Name("");
      setMember2Name("");
      setMember3Name("");
    } catch (error) {
      console.error("Error creating team:", error);
      setErrorMessage("Failed to create team. Please try again.");
    }
  };

  return (
    <div id="Container" className="flex column">
      <Navbar />
      <div id="bodyContainer">
        <div id="huntSection" className="flex column">
          <p className="titleHeadText">Treasure Hunt - Create team</p>
          <div id="clueSection" className="flex row space-between">
            <form id="clueForm" className="flex column" onSubmit={handleSubmit}>
              <div className="inputBoxContainer flex row space-between align_items_center">
                <p className="inputTitle">Team Name</p>
                <input
                  type="text"
                  className="inputBox"
                  placeholder="Enter Team Name"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  required
                />
              </div>
              <div className="inputBoxContainer flex row space-between align_items_center">
                <p className="inputTitle">Leader Name</p>
                <input
                  type="text"
                  className="inputBox"
                  placeholder="John Doe"
                  value={leaderName}
                  onChange={(e) => setLeaderName(e.target.value)}
                  required
                />
              </div>
              <div className="inputBoxContainer flex row space-between align_items_center">
                <p className="inputTitle">Member1 Name</p>
                <input
                  type="text"
                  className="inputBox"
                  placeholder="John Doe"
                  value={member1Name}
                  onChange={(e) => setMember1Name(e.target.value)}
                />
              </div>
              <div className="inputBoxContainer flex row space-between align_items_center">
                <p className="inputTitle">Member2 Name</p>
                <input
                  type="text"
                  className="inputBox"
                  placeholder="John Doe"
                  value={member2Name}
                  onChange={(e) => setMember2Name(e.target.value)}
                />
              </div>
              <div className="inputBoxContainer flex row space-between align_items_center">
                <p className="inputTitle">Member3 Name</p>
                <input
                  type="text"
                  className="inputBox"
                  placeholder="John Doe"
                  value={member3Name}
                  onChange={(e) => setMember3Name(e.target.value)}
                />
              </div>
              <div className="flex row" id="clueFormBtnContainer">
                <button type="submit" className="btn_lite purpleShade">
                  SUBMIT
                </button>
              </div>
              {errorMessage && <p className="errorMessage">{errorMessage}</p>}
            </form>

            <div id="aboutSection" className="flex column">
              <p className="titleHeadText">About MPL</p>

              <p className="descText">
                The Math Premier League, organized by SIAM-VIT, is an engaging
                event that combines mathematics with interactive challenges. It
                includes three distinct rounds: the Coding Relay, where teams
                solve programming problems in a timed relay format; the Treasure
                Hunt, which involves solving clues to uncover hidden items; and
                a Jeopardy-style game covering a wide range of genres beyond
                just mathematics. This event is designed to foster both
                competition and teamwork while providing a diverse and enjoyable
                experience for all participants.
              </p>

              <div className="flex row space-between">
                <div id="detailContainer" className="flex column">
                  <div className="detailBox flex row">
                    <p className="detailHead bold">Date</p>
                    <p className="detail">28 September 2024</p>
                  </div>
                  <div className="detailBox flex row">
                    <p className="detailHead bold">Time</p>
                    <p className="detail">09:00 AM - 07:00 PM</p>
                  </div>
                  <div className="detailBox flex row">
                    <p className="detailHead bold">Venue</p>
                    <p className="detail">Smart Classroom</p>
                  </div>
                </div>
                <img src={eventFlow} id="eventFlowImg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
