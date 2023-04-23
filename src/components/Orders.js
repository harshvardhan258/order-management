import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrders } from "../actions/fetchOrders";
import Table from "./Table";
import Filter from "./Filter";
import Pagination from "./Pagination";
import orders from "../constants/Orders";

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("order_id");
  const [sortOrder, setSortOrder] = useState("asc");
  const ordersPerPage = 10;
  const dispatch = useDispatch();
  const ordersState = useSelector((state) => state.order);

  // dispatch the fetchOrders action on component mount
  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  // filter the orders based on the search text
  useEffect(() => {
    setFilteredOrders(
      orders.filter((order) =>
        Object.values(order)
          .join(" ")
          .toLowerCase()
          .includes(searchText.toLowerCase())
      )
    );
  }, [orders, searchText]);

  // sort the orders based on the selected field and order
  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
    setCurrentPage(1);
  };

  // calculate the pagination variables
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders
    .sort((a, b) =>
      sortOrder === "asc"
        ? a[sortBy] > b[sortBy]
          ? 1
          : -1
        : a[sortBy] < b[sortBy]
        ? 1
        : -1
    )
    .slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  return (
    <div>
      <h2>Orders</h2>
      <Filter searchText={searchText} setSearchText={setSearchText} />
      <Table
        orders={currentOrders}
        handleSort={handleSort}
        sortBy={sortBy}
        sortOrder={sortOrder}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Orders;
