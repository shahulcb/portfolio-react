import React from "react";

function WorkImage({ imageSrc }) {
  return (
    <img
      src={imageSrc + `?fm=webp&q=100`}
      alt=""
      className="w-full max-h-[540px] object-cover rounded-md"
    />
  );
}

export default WorkImage;
