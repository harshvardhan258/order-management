import React from "react";
import Enzyme, { shallow } from "enzyme";
import { useSelector } from "react-redux";
import Orders from "../components/Orders";
import Table from "../components/Table";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import ordersData from "../mocks/orders.json";
import Adapter from "enzyme-adapter-react-16";
import { fetchOrders } from "../actions/fetchOrders";
Enzyme.configure({ adapter: new Adapter() });

jest.mock("react-redux");

describe("Orders component", () => {
  const dispatch = jest.fn();
  let wrapper;

  beforeEach(() => {
    useSelector.mockImplementation((callback) => {
      return callback({
        orders: {
          orders: ordersData,
          loading: false,
          error: null,
        },
      });
    });

    wrapper = shallow(<Orders dispatch={dispatch} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render without errors", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should display the orders table", () => {
    expect(wrapper.find(Table)).toHaveLength(1);
  });

  it("should display the filter component", () => {
    expect(wrapper.find(Filter)).toHaveLength(1);
  });

  it("should display the pagination component", () => {
    expect(wrapper.find(Pagination)).toHaveLength(1);
  });
});
