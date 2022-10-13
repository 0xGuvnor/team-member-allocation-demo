import React from "react";
import femalePp from "../images/femaleProfile.jpg";
import malePp from "../images/maleProfile.jpg";

const Employees = ({
  employees,
  selectedTeam,
  handleEmployeeCardClick,
  handleTeamSelectionChange,
}) => {
  return (
    <main className="container">
      <div className="row justify-content-center my-3">
        <div className="col-6">
          <select
            className="form-select form-select-lg"
            value={selectedTeam}
            onChange={handleTeamSelectionChange}
          >
            <option value="TeamA">Team A</option>
            <option value="TeamB">Team B</option>
            <option value="TeamC">Team C</option>
            <option value="TeamD">Team D</option>
          </select>
        </div>
      </div>

      <div className="row justify-content-center my-3">
        <div className="col-8">
          <div className="card-collection">
            {employees.map((employee) => (
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
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;
