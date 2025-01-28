import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <a href={url} target="_blank">
          <Button className={"w-full lg:w-[200px]"}>View Live App</Button>
        </a>
      </div>
      <div className="flex flex-col flex-[1] gap-4">
        {points?.map((point, index) => (
          <p
            className="flex gap-5 items-center text-base font-light text-customTextColor"
            key={index}
          >
            <FontAwesomeIcon icon={faSquare} color="#eab308" width={"10px"} />
            {point}
          </p>
        ))}
      </div>
    </div>
  );
}

export default WorkHeaderSection;
