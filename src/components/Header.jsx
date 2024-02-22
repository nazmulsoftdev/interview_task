import React from "react";
import { FiAlignJustify as NavIcon } from "react-icons/fi";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";

function Header({ modalHandler, showPopModal }) {
  return (
    <>
      <div className="mb-5 flex justify-between items-center">
        {/*Header Title */}
        <h3 className="text-gray-800 font-bold text-lg">Table Task</h3>
        {/*Header Toggle Icon */}
        <div onClick={modalHandler}>
          {showPopModal ? (
            <CloseIcon
              className="cursor-pointer text-[#747d8c] hover:text-[#e05c7d]"
              size={30}
            />
          ) : (
            <NavIcon
              className="cursor-pointer text-[#747d8c] hover:text-[#2ed573]"
              size={30}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
