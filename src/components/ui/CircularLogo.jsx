import React from "react";

const CircularLogo = ({ src, label, color = "text-gray-900" }) => {
  return (
    <div className="flex items-center space-x-2">
      <img
        src={src}
        alt="GECO Logo"
        className="w-14 h-14 md:w-10 md:h-10 lg:w-10 lg:h-10 rounded-full object-cover"
      />

      <span className={`text-2xl font-bold ${color}`}>
        {label}
      </span>
    </div>
  );
};

export default CircularLogo;
