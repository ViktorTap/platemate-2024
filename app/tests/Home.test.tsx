import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Home from "../page";

describe("Home Component", () => {
  it("renders the RestaurantList component", () => {
    render(<Home />);
    const restaurantListElement = screen.getByTestId("restaurant-list");
    expect(restaurantListElement).toBeInTheDocument();
  });
});
