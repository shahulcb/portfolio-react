import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function WorkContentSection({ title, points }) {
  return (
    <div className="flex gap-8 flex-col lg:flex-row">
      <div className="flex-1">
        <h1 className="text-[28px] font-normal flex items-center gap-5">
          <FontAwesomeIcon icon={faSquare} color="#eab308" width={"20px"} />
          {title}
        </h1>
      </div>
      <div className="flex-1 flex flex-col gap-4">
        {points?.map((point, index) => (
          <div className="flex flex-col gap-2" key={index}>
            <h3 className="text-xl font-normal">{point.title}</h3>
            <p className="text-base font-light text-customTextColor">
              {point.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkContentSection;
