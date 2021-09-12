import React from "react";

function Button({ button, filter, sorted }) {
  return (
    <div className="buttons">
      {button.map((cat, i) => {
        return (
          <button
            type="button"
            onClick={() => filter(cat)}
            className="btn"
            key={i}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

export default Button;
