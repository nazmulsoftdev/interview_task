import React from "react";

function CheckBox({ label, name, handleCheckBox, value }) {
  return (
    <div className="flex items-center space-x-3 mt-2">
      <input
        type="checkbox"
        name={name}
        value={value}
        onChange={handleCheckBox}
        defaultChecked={value}
      />
      <label htmlFor="title">{label}</label>
    </div>
  );
}

export default CheckBox;
