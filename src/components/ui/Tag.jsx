import React from "react";

const RedRibbon = ({ text }) => {
  return (
    <div className="relative inline-block">
      <div className="absolute top-0 left-0 transform -rotate-45 bg-red-500 text-white px-4 py-1">
        {text}
      </div>
      <div className="w-full h-full bg-red-500 text-white px-4 py-2 shadow-lg">
        {/* This is the main content area where you can place any other content */}
      </div>
    </div>
  );
};

export default RedRibbon;
