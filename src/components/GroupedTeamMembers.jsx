import React, { useState } from "react";

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {
  const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMembers());

  const groupTeamMembers = () => {};

  return <div>GroupedTeamMembers</div>;
};

export default GroupedTeamMembers;
