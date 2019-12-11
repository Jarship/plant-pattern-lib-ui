import React from "react";
import renderer from "react-test-renderer";
import { matchers } from 'jest-emotion';

import View from "../view";

expect.extend(matchers);

const mockTheme = {
  header: {
    height: 0
  },
  breakpoints: ["768px"],
  space: base => base,
  views: {
    primary: {
      backgroundColor: "red",
    }
  }
};
mockTheme.views.primary.padding = mockTheme.space(4);

test("view conforms to expected styles", () => {
  const testView = renderer.create(<View theme={mockTheme} />).toJSON();
  const {
    views: { primary: { backgroundColor }},
    header: { height },
    breakpoints: [mobile],
    space
  } = mockTheme;

  expect(testView).toHaveStyleRule("background-color", `${backgroundColor}`);
  expect(testView).toHaveStyleRule("padding", `${space(4)}px`);
  expect(testView).toHaveStyleRule("min-width", "100vw");
  expect(testView).toHaveStyleRule("overflow-x", "hidden");
  expect(testView).toMatchSnapshot();
});
