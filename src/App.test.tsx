import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import App from "./App";
import { defaultState } from "./store/series/reducer";

const mockedStore = {
  series: defaultState
};

const mockStore = configureMockStore([]);

let store: any;
let app: any;

beforeAll(() => {
  store = mockStore(mockedStore);
  app = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});

test("loads and displays App component", () => {
  expect(app).toBeDefined();
});
