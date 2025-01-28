import React from "react";
import Button from "../Button";

function WorkHeaderSection({ title, description, points, url }) {
  return (
    <div className="flex gap-8 i flex-col items-start lg:flex-row lg:items-center">
      <div className="flex-[2] flex flex-col gap-4">
        <h1 className="text-[40px] font-normal">{title}</h1>
        <p className="text-base font-light text-customTextColor">
          {description}
        </p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Button className={"w-full lg:w-[200px]"}>View Live App</Button>
        </a>
      </div>
      <div className="flex flex-col flex-[1] gap-4">
        {points?.map((point, index) => (
          <p
            className="flex gap-5 items-center text-base font-light text-customTextColor"
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
    </div>
  );
}

export default WorkHeaderSection;
