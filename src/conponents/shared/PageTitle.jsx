import React from "react";

const PageTitle = ({ topper, title, message }) => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center font-semibold">
      <h5 className="text-prime text-lg">{topper}</h5>
      <h2 className="text-3xl md:text-4xl lg:text-5xl">{title}</h2>
      <p className="font-normal md:w-1/2 text-center">{message}</p>
    </div>
  );
};

export default PageTitle;
