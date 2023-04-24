import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Filter from "../components/Filter";

describe("Filter component", () => {
  it("should render without errors", () => {
    const searchText = "";
    const handleSearch = jest.fn();
    const { getByPlaceholderText } = render(
      <Filter searchText={searchText} handleSearch={handleSearch} />
    );

    expect(
      getByPlaceholderText(
        "Search by Order Id, Vendor name, Pick up date, or Status"
      )
    ).toBeInTheDocument();
  });

  it("should render the input element correctly", () => {
    const searchText = "";
    const handleSearch = jest.fn();
    const { getByPlaceholderText } = render(
      <Filter searchText={searchText} handleSearch={handleSearch} />
    );

    const inputElement = getByPlaceholderText(
      "Search by Order Id, Vendor name, Pick up date, or Status"
    );
    expect(inputElement).toHaveAttribute("type", "text");
    expect(inputElement).toHaveClass("form-control");
    expect(inputElement).toHaveValue("");
  });

  it("should call handleSearch function when input value is changed", () => {
    const searchText = "";
    const handleSearch = jest.fn();
    const { getByPlaceholderText } = render(
      <Filter searchText={searchText} handleSearch={handleSearch} />
    );

    const inputElement = getByPlaceholderText(
      "Search by Order Id, Vendor name, Pick up date, or Status"
    );
    fireEvent.change(inputElement, { target: { value: "test" } });
    expect(handleSearch).toHaveBeenCalledWith("test");
  });
});
