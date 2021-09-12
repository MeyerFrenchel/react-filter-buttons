import React from "react";

const Sort = ({ sort, sorts }) => {
  return (
    <div style={{ textAlign: "center", marginBottom: "50px" }}>
      <select value={sorts} onChange={sort}>
        <option value="all">All</option>
        <option value="low">Low</option>
        <option value="high">High</option>
      </select>
    </div>
  );
};

export default Sort;
