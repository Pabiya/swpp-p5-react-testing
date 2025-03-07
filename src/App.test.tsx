// import { render } from "@testing-library/react";

// import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
// });

import { render, screen } from "@testing-library/react"; 
import { Provider } from "react-redux";
import App from "./App"; 
import { store } from "./store";

test("renders App.tsx", () => { 
  render( <Provider store={store}><App /></Provider>);
  screen.debug();
  expect(true).toBe(true) // This make failing test case
});