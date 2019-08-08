import React from "react";
import { shallow } from "enzyme";

import DisplayCooperResult from "../components/DisplayCooperResult";

describe("<DisplayCooperResult />"),
  () => {
    it("evaluates the correct result for the female/poor", () => {
      const describedComponent = shallow(
        <DisplayCooperResult distance="1000" gender="female" age="23" />
      );
      const response = <p>Result: Average</p>;
      expect(describedComponent.contains(response)).toEqual(true);
    });

    it("evaluates the correct result for the female/average", () => {
      const describedComponent = shallow(
        <DisplayCooperResult distance="2000" gender="female" age="23" />
      );
      const response = <p>Result: Average</p>;
      expect(describedComponent.contains(response)).toEqual(true);
    });
  };
