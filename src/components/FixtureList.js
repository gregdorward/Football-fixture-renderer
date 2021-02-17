import React, { Fragment } from "react";
import { CreateBadge } from "./createBadge";
import Collapsable from "../components/CollapsableElement";

function GetDivider(props) {
  const matchStatus = props.fixture.status;
  const isPrediction = props.result;

  if (matchStatus !== "complete") {
    return <div className="divider">{"V"}</div>;
  } else if (matchStatus === "complete") {
    return (
      <div className="Result">{`${props.fixture.homeGoals} - ${props.fixture.awayGoals}`}</div>
    );
  }
}

let fixtureClassName;

function getStyle(fixture) {
  if (fixture.btts_potential >= 40) {
    fixtureClassName = "highlight";
  } else {
    fixtureClassName = "individualFixture"
  }
  return fixtureClassName;
}

export function FixtureList(props) {
  return (
    <ul id="fixtures" className="container">
      <div className="fixture">
        <Collapsable />
        {props.fixtures.map((fixture) => (
          <div
            onMouseEnter={(event) =>
              (event.target.style.color = "hsl(1, 100%, 68%)")
            }
            onMouseLeave={(event) => (event.target.style.color = "")}
          >
            <li
              id={props.highlight}
              className={getStyle(fixture)}
              key={fixture.id}
            >
              <div
                className="homeForm"
                style={{
                  backgroundColor: fixture.homeFormColour,
                }}
              >
                {fixture.homePpg}
              </div>
              <div className="homeTeam">{fixture.homeTeam}</div>
              <GetDivider
                result={props.result}
                status={fixture.status}
                fixture={fixture}
              />
              {/* <div className="divider">{"V"}</div> */}
              <div className="awayTeam">{fixture.awayTeam}</div>
              <div
                className="awayForm"
                style={{
                  backgroundColor: fixture.awayFormColour,
                }}
              >
                {fixture.awayPpg}
              </div>
              <CreateBadge
                image={fixture.homeTeamInfo.badge}
                ClassName="HomeBadge"
                alt="Home team badge"
                flexShrink={5}
              />
              <CreateBadge
                image={fixture.awayTeamInfo.badge}
                ClassName="AwayBadge"
                alt="Away team badge"
              />
            </li>
            <div>
            </div>
          </div>
        ))}
      </div>
    </ul>
  );
}
