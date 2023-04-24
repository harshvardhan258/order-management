import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import Pagination from "../components/Pagination";

describe("Pagination component", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(
      <Pagination currentPage={1} totalPages={5} setCurrentPage={() => {}} />
    );

    const prevButton = getByRole("button", { name: "Prev" });
    const nextButton = getByRole("button", { name: "Next" });
    const pageNumberButtons = getByRole("button", { name: "1" });

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(pageNumberButtons).toBeInTheDocument();
  });

  it("handles click event correctly", () => {
    const mockSetCurrentPage = jest.fn();
    const { getByText } = render(
      <Pagination
        currentPage={1}
        totalPages={10}
        setCurrentPage={mockSetCurrentPage}
      />
    );

    fireEvent.click(getByText("2"));

    expect(mockSetCurrentPage).toHaveBeenCalledWith(2);
  });
});
