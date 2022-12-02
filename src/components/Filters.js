import React from "react";
import { useProductContext } from "../context/products_context";
const Filters = () => {
  const { handleFilter, searchTerm, clearFilter } = useProductContext();
  return (
    <form onSubmit={(e) => e.preventDefault()} className="mt-3">
      <div className="input-group filter-container">
        <input
          type="text"
          name="searchTerm"
          id="searchTerm"
          value={searchTerm}
          onChange={handleFilter}
          className="form-control"
          placeholder="Search..."
        />
        <button onClick={clearFilter} type="button" className="btn btn-success">
          Clear
        </button>
      </div>
    </form>
  );
};

export default Filters;
