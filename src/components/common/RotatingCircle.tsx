import React from "react";

const RotatingCircle = () => {
  return (
    <div className="flex items-center justify-center bg-white">
      <div className="relative flex items-center w-full">
        {/* Blue line spanning full width */}
        <div className="absolute w-full h-[2px] bg-blue-500 z-0"></div>

        {/* Rotating circle in the center */}
        <div className="relative z-10 mx-auto">
          <div
            className="w-14 h-14 rounded-full border-6 border-blue-500 overflow-hidden bg-white"
            style={{ animation: "spin 3s linear infinite" }}
          >
            <div className="w-full h-1/2 bg-red-500"></div>
            <div className="w-full h-1/2 bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RotatingCircle;
