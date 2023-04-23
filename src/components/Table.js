import React from "react";

const Table = ({ orders, handleSort, sortBy, sortOrder }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => handleSort("orderId")}>
            Order Id {sortBy === "orderId" && sortOrder === "asc" ? "▲" : "▼"}
          </th>
          <th onClick={() => handleSort("vendorName")}>
            Vendor name{" "}
            {sortBy === "vendorName" && sortOrder === "asc" ? "▲" : "▼"}
          </th>
          <th onClick={() => handleSort("pickupDate")}>
            Pick up date{" "}
            {sortBy === "pickupDate" && sortOrder === "asc" ? "▲" : "▼"}
          </th>
          <th onClick={() => handleSort("status")}>
            Status {sortBy === "status" && sortOrder === "asc" ? "▲" : "▼"}
          </th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.orderId}>
            <td>{order.orderId}</td>
            <td>{order.vendorName}</td>
            <td>{order.pickupDate}</td>
            <td>{order.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
