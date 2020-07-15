/*import React from "react";
import { render } from "@testing-library/react";
import Livreliste from "./../components/livreliste/Livreliste";
import MutationObserver from "mutation-observer";
import user from "@testing-library/user-event";
global.MutationObserver = MutationObserver;

describe("integration test", () => {
  test("test the integration of FormSearchLivre and LivreListe", () => {
    const usermock = JSON.parse(sessionStorage.getItem("user"));
    const mockfindLivreById = jest.fn();
    const mockfetchLivres = jest.fn();
    const mocksetLivres = jest.fn();
    const mocklivres = [
      {
        id: "5",
        libelle: "learn Mongo",
        auteur: 60,
        edition: "aaa",
        nombreExemplaires: 2,
        image: require("../components/images/l2.jpg"),
      },
    ];
    const { getByTestId } = render(
      <Livreliste
        livres={mocklivres}
        setLivres={mocksetLivres}
        findLivreById={mockfindLivreById}
        fetchLivres={mockfetchLivres}
        user={usermock}
      />
    );
    const SearchButton = getByTestId("SearchLivre");
    user.click(SearchButton);
    expect(mockfindLivreById).toHaveBeenCalled();
    expect(mockfetchLivres).toHaveBeenCalled();
    expect(mocksetLivres).toHaveBeenCalled();
  });
}); */
