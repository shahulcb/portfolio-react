import React from "react";

function OpenToWorkButton() {
  return (
    <div className="px-4 py-2 bg-[#12fd7f0a] text-[#03e26b] h-max flex justify-center items-center gap-4 rounded-md cursor-pointer hover:bg-[#12fd8011] transition ease-in-out duration-500">
      <span className="relative flex h-[10px] w-[10px] items-center justify-center">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#03e26b] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2  bg-[#03e26b]"></span>
      </span>
      <span className="text-base font-medium">Open to work</span>
    </div>
  );
}

export default OpenToWorkButton;
