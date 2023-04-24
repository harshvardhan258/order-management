import React from "react";
import Enzyme, { shallow } from "enzyme";
import Table from "../components/Table";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Table component", () => {
  const orders = [
    {
      orderId: "1001",
      vendorName: "Vendor A",
      pickupDate: "2022-04-25",
      status: "PENDING",
    },
    {
      orderId: "1002",
      vendorName: "Vendor B",
      pickupDate: "2022-04-26",
      status: "IN_PROGRESS",
    },
    {
      orderId: "1003",
      vendorName: "Vendor C",
      pickupDate: "2022-04-27",
      status: "DELIVERED",
    },
  ];
  const handleSort = jest.fn();
  const sortBy = "orderId";
  const sortOrder = "asc";

  it("should render the table headers with correct sort icons", () => {
    const wrapper = shallow(
      <Table
        orders={orders}
        handleSort={handleSort}
        sortBy={sortBy}
        sortOrder={sortOrder}
      />
    );
    expect(wrapper.find("th").at(0).text()).toBe("Order Id ▲");
    expect(wrapper.find("th").at(1).text()).toBe("Vendor name ▼");
    expect(wrapper.find("th").at(2).text()).toBe("Pick up date ▼");
    expect(wrapper.find("th").at(3).text()).toBe("Status ▼");
  });

  it("should render the table rows with correct order information", () => {
    const wrapper = shallow(
      <Table
        orders={orders}
        handleSort={handleSort}
        sortBy={sortBy}
        sortOrder={sortOrder}
      />
    );
    expect(wrapper.find("tr").at(1).find("td").at(0).text()).toBe("1001");
    expect(wrapper.find("tr").at(1).find("td").at(1).text()).toBe("Vendor A");
    expect(wrapper.find("tr").at(1).find("td").at(2).text()).toBe("2022-04-25");
    expect(wrapper.find("tr").at(1).find("td").at(3).text()).toBe("PENDING");
    expect(wrapper.find("tr").at(2).find("td").at(0).text()).toBe("1002");
    expect(wrapper.find("tr").at(2).find("td").at(1).text()).toBe("Vendor B");
    expect(wrapper.find("tr").at(2).find("td").at(2).text()).toBe("2022-04-26");
    expect(wrapper.find("tr").at(2).find("td").at(3).text()).toBe(
      "IN_PROGRESS"
    );
    expect(wrapper.find("tr").at(3).find("td").at(0).text()).toBe("1003");
    expect(wrapper.find("tr").at(3).find("td").at(1).text()).toBe("Vendor C");
    expect(wrapper.find("tr").at(3).find("td").at(2).text()).toBe("2022-04-27");
    expect(wrapper.find("tr").at(3).find("td").at(3).text()).toBe("DELIVERED");
  });
});
