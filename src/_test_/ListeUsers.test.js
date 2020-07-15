import React from "react";
import { render } from "@testing-library/react";
import ListeUsers from "./../components/ListeUsers/ListeUsers";
//import user from "@testing-library/user-event";
import mockUsers from "../mock/mockUsers";
import MutationObserver from "mutation-observer";
global.MutationObserver = MutationObserver;

describe("test users list", () => {
  test("should render Liste of users", () => {
    const mockbanni = "false";
    const UsersComponent = render(
      <ListeUsers banni={mockbanni} users={mockUsers} />
    );
    expect(UsersComponent).toMatchSnapshot();
    // debug()
  });
});
