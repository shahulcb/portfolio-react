import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, tag, description, points }) => {
  return (
    <div
      className={`w-full h-full rounded-md flex flex-col gap-4 cursor-pointer border border-customBorderColor p-4`}
    >
      <div className="flex gap-5 items-center">
        <h3 className="text-xl font-normal">{title}</h3>
        <span className="text-sm text-customTextColor border border-customBorderColor p-1.5 bg-customHoverColor rounded-md">
          {tag}
        </span>
      </div>
      <p className="text-customTextColor text-lg font-light">{description}</p>
      <div className="flex flex-col flex-[1] gap-4">
        {points?.map((point, index) => (
          <p
            className="flex gap-5 items-center text-[15px] font-light text-customTextColor"
            key={index}
          >
            <i
              className="fa-regular fa-square"
              style={{ color: "#eab308", width: "10px" }}
            ></i>
            {point}
          </p>
        ))}
      </div>
      <Link to={"/contact"}>
        <Button className={"w-52"}>Get started now</Button>
      </Link>
    </div>
  );
};

export default ServiceCard;
