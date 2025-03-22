import React from "react";

export default function ServiceItem({ title, desc }) {
  return (
    <div className="flex flex-col rounded-md items-center  border-2 p-4 gap-4 border-primarycolor dark:border-yellow-200 hover:shadow-lg transition-transform transform hover:scale-105 ">
      <div >
    <p className="text-secondarycolor dark:bg-clip-text dark:text-transparent bg-gradient-to-r dark:dark:bg- dark:from-yellow-500 dark:to-red-500 font-bold text-lg"> {title}</p>
      </div>
      <div>
      <p> {desc}</p>
      </div>
    </div>
  );
}
