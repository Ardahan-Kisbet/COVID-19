import React from "react";
import { configure, shallow, render } from "enzyme";
import chai, { expect, should } from "chai";
//import TestComponent from "../Components/TestComponent";
//import App from "../App";
import chaiEnzyme from "chai-enzyme";

import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("App Component testing", function () {
  it("App renders main message", () => {
    //   const wrapper = shallow(<TestComponent />);
    //   const editText = (
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   );
    //   expect(wrapper).to.contain(editText);
  });

  chai.use(chaiEnzyme());
});

// Checking githubData.js
const githubData = require("../githubData.js");
it("Should return the total repo count related with COVID on github", async () => {
  // no done
  const data = await githubData.getTotalRepoCount();
  expect(data).greaterThan(10000);
  expect(data).to.be.a("number");
});

it("Should return array of repo counts by monthly", async () => {
  // no done
  const data = await githubData.getRepoCounts();
  expect(data).to.be.a("array", "Not an array!");
});
