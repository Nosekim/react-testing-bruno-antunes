import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

it('Renders "Hello world!"', () => {
  render(<Hello />);
  const myElement = screen.getByText("Hello World!");
  expect(myElement).toBeInTheDocument(); // eslint-disable-line no-debugger
});
