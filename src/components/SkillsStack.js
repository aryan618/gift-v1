import React from "react";
import Skills from "./Skills";
import { v4 as uuid } from "uuid";
import { Consumer } from "./context";
function SkillsStack() {
  return (
    <Consumer>
      {(value) => {
        const { skills } = value;
        const skillsrow = [];
        for (let i = 0; i < skills.length / 3; i++) {
          let arr = skills.slice(i * 3, (i + 1) * 3);
          skillsrow.push(
            <div key={uuid()} className="d-flex justify-content-around py-3">
              {arr.map((skill) => (
                <Skills key={uuid()} skill={skill} />
              ))}
            </div>
          );
        }
        return (
          <div className="bg-light w-100">
            <div className="container text-center py-5">
              <h1 className="font-weight-light">
                <span className="text-info">Selfies</span> stack
              </h1>
              <div className="lead pb-5">
                Favorites collection of Selfies my love has choosen
              </div>
              {skillsrow}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default SkillsStack;
