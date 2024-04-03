import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-between w-[80%]">
      <div></div>
      <div className="flex flex-row w-[60vw] bg-slate-200 p-3 rounded-lg">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Send
        </button>
      </div>
    </div>
  );
};

export default Hero;
