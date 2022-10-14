import React, { useState } from "react";

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {
  const groupTeamMembers = () => {
    let teams = [];

    let teamAMembers = employees.filter(
      (employee) => employee.teamName === "TeamA"
    );
    let teamA = {
      team: "TeamA",
      members: teamAMembers,
      collapsed: selectedTeam === "TeamA" ? false : true,
    };
    teams.push(teamA);

    let teamBMembers = employees.filter(
      (employee) => employee.teamName === "TeamB"
    );
    let teamB = {
      team: "TeamB",
      members: teamBMembers,
      collapsed: selectedTeam === "TeamB" ? false : true,
    };
    teams.push(teamB);

    let teamCMembers = employees.filter(
      (employee) => employee.teamName === "TeamC"
    );
    let teamC = {
      team: "TeamC",
      members: teamCMembers,
      collapsed: selectedTeam === "TeamC" ? false : true,
    };
    teams.push(teamC);

    let teamDMembers = employees.filter(
      (employee) => employee.teamName === "TeamD"
    );
    let teamD = {
      team: "TeamD",
      members: teamDMembers,
      collapsed: selectedTeam === "TeamD" ? false : true,
    };
    teams.push(teamD);

    return teams;
  };

  const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMembers());

  const handleTeamClick = (event) => {
    const transformedGroupData = groupedEmployees.map((group) =>
      group.team === event.target.id
        ? { ...group, collapsed: !group.collapsed }
        : group
    );

    setGroupedEmployees(transformedGroupData);
    setTeam(event.currentTarget.id);
  };

  return (
    <main className="container">
      {groupedEmployees.map((group) => (
        <div
          key={group.team}
          className="card mt-2"
          style={{ cursor: "pointer" }}
        >
          <h4
            id={group.team}
            className="card-header text-secondary bg-white"
            onClick={handleTeamClick}
          >
            {group.team}
          </h4>
          <div
            id={`collapse_${group.team}`}
            className={group.collapsed ? "collapse" : ""}
          >
            {group.members.map((member) => (
              <div key={member.id} className="mt-2">
                <h5 className="card-title mt-2">
                  <span className="text-dark">{member.fullName}</span>
                </h5>
                <p>{member.designation}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
};

export default GroupedTeamMembers;
