import React from "react";
import { render } from "@testing-library/react";
import Appointment from "components/Appointment";

describe("Testing Appointment", () => {
  it("renders without crashing", () => {
    render(<Appointment />);
  });
});


/*
  We are rendering `<Application />` down below, so we need React.createElement
*/
// import React from "react";

/*
  We import our helper functions from the react-testing-library
  The render function allows us to render Components
*/
// import { render } from "@testing-library/react";

/*
  We import the component that we are testing
*/
// import Application from "components/Application";

/*
  A test that renders a React Component
*/
// it("renders without crashing", () => {
//   render(<Application />);
// });
