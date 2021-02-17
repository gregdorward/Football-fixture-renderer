import React from "react";
import Collapsable from "../components/CollapsableElement";

function GetDivider(props) {
  const matchStatus = props.fixture.status;

  if (matchStatus !== "complete") {
    return <div className="divider">{"V"}</div>;
  } else if (matchStatus === "complete") {
    return (
      <div className="Result">{`${props.fixture.homeGoals} - ${props.fixture.awayGoals}`}</div>
    );
  }
}

export function FixtureList(props) {
  return (
    <ul id="fixtures" className="container">
      <div className="fixture">
        <Collapsable buttonText={"Help"} text={"Fixtures showing points per game picked up so far this season for each team"}/>
        {props.fixtures.map((fixture) => (
          <div
            onMouseEnter={(event) =>
              (event.target.style.color = "hsl(1, 100%, 68%)")
            }
            onMouseLeave={(event) => (event.target.style.color = "")}
          >
            <li
              id="individualFixture"
              className="individualFixture"
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
            </li>
            <div>
            </div>
          </div>
        ))}
      </div>
    </ul>
  );
}
