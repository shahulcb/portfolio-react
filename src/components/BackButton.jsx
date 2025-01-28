import React from "react";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(-1)}
      className="w-full text-base font-light text-customTextColor flex items-center gap-3 cursor-pointer hover:text-yellow-500 hover:gap-5 transition-all ease-in-out duration-500"
    >
      <i className="fa-solid fa-arrow-left"></i>
      <span>Back</span>
    </div>
  );
}

export default BackButton;
