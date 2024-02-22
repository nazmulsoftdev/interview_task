import React, { useState } from "react";
import CheckBox from "./reuseable/CheckBox";
import { IoIosCloseCircleOutline as CloseIcon } from "react-icons/io";

// pass props for ditect specific item
function FilterList({
  modalHandler,
  setTitleDitectTor,
  setAuthorDitector,
  setCategorieDitector,
  setPriceDitector,
  setStatusDitector,
  setDateDitector,
  setActionDitector,
}) {
  // all checkbox state define
  const [titleCheckBox, setTitleCheckBox] = useState(true);
  const [authorCheckBox, setAuthorCheckBox] = useState(true);
  const [categoriCheckBox, setCategoriCheckBox] = useState(true);
  const [priceCheckBox, setPriceCheckBox] = useState(true);
  const [statusCheckBox, setStatusCheckBox] = useState(true);
  const [dateCheckBox, setDateCheckBox] = useState(true);
  const [actionCheckBox, setActionCheckBox] = useState(true);

  // title checkbox handler
  const TitleCheckBoxHandler = (e) => {
    setTitleCheckBox((prevValue) => !prevValue);

    if (e.target.checked) {
      setTitleDitectTor((prevState) => !prevState);
    } else {
      console.log("Title Inactive");
      setTitleDitectTor((prevState) => !prevState);
    }
  };

  // author checkbox handler
  const AuthorCheckBoxHandler = (e) => {
    setAuthorCheckBox((prevValue) => !prevValue);

    if (e.target.checked) {
      setAuthorDitector((prevState) => !prevState);
    } else {
      setAuthorDitector((prevState) => !prevState);
    }
  };

  // categories checkbox handler
  const CategoriCheckBoxHandler = (e) => {
    setCategoriCheckBox((prevValue) => !prevValue);

    if (e.target.checked) {
      setCategorieDitector((prevState) => !prevState);
    } else {
      setCategorieDitector((prevState) => !prevState);
    }
  };

  // price checkbox handler
  const PriceCheckBoxHandler = (e) => {
    setPriceCheckBox((prevValue) => !prevValue);

    if (e.target.checked) {
      setPriceDitector((prevState) => !prevState);
    } else {
      setPriceDitector((prevState) => !prevState);
    }
  };

  // status checkbox handler
  const StatusCheckBoxHandler = (e) => {
    setStatusCheckBox((prevValue) => !prevValue);

    if (e.target.checked) {
      setStatusDitector((prevState) => !prevState);
    } else {
      setStatusDitector((prevState) => !prevState);
    }
  };

  // date checkbox handler
  const DateCheckBoxHandler = (e) => {
    setDateCheckBox((prevValue) => !prevValue);

    if (e.target.checked) {
      setDateDitector((prevState) => !prevState);
    } else {
      setDateDitector((prevState) => !prevState);
    }
  };

  // action checkbox handler
  const ActionCheckBoxHandler = (e) => {
    setActionCheckBox((prevValue) => !prevValue);

    if (e.target.checked) {
      setActionDitector((prevState) => !prevState);
    } else {
      setActionDitector((prevState) => !prevState);
    }
  };

  return (
    <div className="w-[300px] p-3 h-auto bg-white shadow-2xl rounded-lg absolute right-40 z-10 ">
      <div>
        {/* Close Filter Icon  & title*/}
        <div className="flex justify-between p-1">
          <h4 className="font-bold text-sm">Add or remove columns</h4>
          <CloseIcon
            onClick={modalHandler}
            size={20}
            className="cursor-pointer hidden lg:block"
          />
        </div>
        <div className="grid grid-cols-2">
          {/* Title check box */}
          <div>
            <CheckBox
              name="Title"
              label="Title"
              value={titleCheckBox}
              handleCheckBox={TitleCheckBoxHandler}
            />
          </div>
          {/* Author check box */}
          <div>
            <CheckBox
              name="Author"
              label="Author"
              value={authorCheckBox}
              handleCheckBox={AuthorCheckBoxHandler}
            />
          </div>
          {/* Categories check box */}
          <div>
            <CheckBox
              name="Categories"
              label="Categories"
              value={categoriCheckBox}
              handleCheckBox={CategoriCheckBoxHandler}
            />
          </div>
          {/* Price check box */}
          <div>
            <CheckBox
              name="Price"
              label="Price"
              value={priceCheckBox}
              handleCheckBox={PriceCheckBoxHandler}
            />
          </div>
          {/* Status check box */}
          <div>
            <CheckBox
              name="Status"
              label="Status"
              value={statusCheckBox}
              handleCheckBox={StatusCheckBoxHandler}
            />
          </div>
          {/* Date check box */}
          <div>
            <CheckBox
              name="Date"
              label="Date"
              value={dateCheckBox}
              handleCheckBox={DateCheckBoxHandler}
            />
          </div>
          {/* Action check box */}
          <div>
            <CheckBox
              name="Action"
              label="Action"
              value={actionCheckBox}
              handleCheckBox={ActionCheckBoxHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterList;
