import React from "react";
import femalePp from "../images/femaleProfile.jpg";
import malePp from "../images/maleProfile.jpg";

const TeamMemberCard = ({
  employee,
  selectedTeam,
  handleEmployeeCardClick,
}) => {
  return (
    <div
      className={`card m-2 ${
        employee.teamName === selectedTeam ? "standout" : ""
      }`}
      key={employee.id}
      id={employee.id}
      style={{ cursor: "pointer" }}
      onClick={handleEmployeeCardClick}
    >
      <img
        src={employee.gender === "male" ? malePp : femalePp}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{employee.fullName}</h5>
        <p className="card-text">
          <b>Designation:</b> {employee.designation}
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
