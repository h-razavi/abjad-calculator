import React from "react";

type Props = {
  l: string;
  n: number;
};

function ValueIndicator({ l, n }: Props) {
  return (
    <div className="flex md:text-lg h-8 ">
      <div className="bg-black rounded-l-full md:w-12 w-10 ml-4 shadow-lg">{l}</div>
      <div className="bg-white text-black rounded-r-full md:w-12 w-10 shadow-lg">{n}</div>
    </div>
  );
}

export default ValueIndicator;
