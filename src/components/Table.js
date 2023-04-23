import React from "react";

const Table = ({ orders, handleSort, sortBy, sortOrder }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => handleSort("order_id")}>
            Order Id {sortBy === "order_id" && sortOrder === "asc" ? "▲" : "▼"}
          </th>
          <th onClick={() => handleSort("vendor_name")}>
            Vendor name{" "}
            {sortBy === "vendor_name" && sortOrder === "asc" ? "▲" : "▼"}
          </th>
          <th onClick={() => handleSort("pick_up_date")}>
            Pick up date{" "}
            {sortBy === "pick_up_date" && sortOrder === "asc" ? "▲" : "▼"}
          </th>
          <th onClick={() => handleSort("status")}>
            Status {sortBy === "status" && sortOrder === "asc" ? "▲" : "▼"}
          </th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.order_id}>
            <td>{order.order_id}</td>
            <td>{order.vendor_name}</td>
            <td>{order.pick_up_date}</td>
            <td>{order.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
