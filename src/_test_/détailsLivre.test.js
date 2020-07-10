import React from "react";
import { render } from "@testing-library/react";
import DetailsLivre from "../components/detailsLivre/DetailsLivre";
import MutationObserver from "mutation-observer";
global.MutationObserver = MutationObserver;

describe("Test Détails livre", () => {
  const mockLivre = {
    libelle: "learn Express",
    auteur: 60,
    edition: "aaa",
    nbExemplaires: 2,
  };

  test("should runder détailsLivre", () => {
    const { debug, getByTestId } = render(
      <DetailsLivre
        libelle={mockLivre.libelle}
        auteur={mockLivre.auteur}
        edition={mockLivre.edition}
        nbExemplaires={mockLivre.nbExemplaires}
      />
    );
    debug();
  });
});
