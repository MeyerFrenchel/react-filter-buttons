import React from "react";

const Menu = ({ menuItem }) => {
  return (
    <div className="item">
      {menuItem.map((item) => {
        return (
          <div key={item.id} className="item-con">
            <div className="item-container">
              <img src={item.image} alt="sad" />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <span style={{ color: "red" }}>{item.price}$</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
