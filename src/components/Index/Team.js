import React from "react";
import { Row } from "react-bootstrap";
import TeamData from "./TeamLinks";
import teamData from "@/data/Index/teamData";

const { title, teams } = teamData;

const Team = () => {
  return (
    <section className="team-section">
      <div className="auto-container">
        <div className="sec-title centered">
          <h2>
            {title} <span className="dot">.</span>
          </h2>
        </div>
        <Row className="clearfix">
          {teams.slice(0, 4).map((team) => (
            <TeamData
              key={team.id}
              team={team}
              className="col-lg-4 col-md-6 col-sm-12"
            />
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Team;
