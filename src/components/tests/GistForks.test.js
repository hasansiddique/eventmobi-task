import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import React from "react";

import GistForks from "../GistForks";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders gist forks data", async () => {
  const gist = {
    name: "Joni Baez",
    age: "32",
    address: "123, Charming Avenue"
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(gist)
      })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<GistForks gistId="123" />, container);
  });

  expect(container.querySelector("li").textContent).toBe(gist.name);
  expect(container.querySelector("strong").textContent).toBe(gist.age);
  expect(container.textContent).toContain(gist.address);

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});
