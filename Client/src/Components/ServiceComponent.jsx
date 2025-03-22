import React from "react";
import serviceData from "../data/serviceData"
import ServiceItem from "./ServiceItem";

export default function ServiceComponent() {
  return (
    <div>
      <h1 className=" flex  justify-center text-secondarycolor dark:bg-clip-text dark:text-transparent bg-gradient-to-r dark:dark:bg- dark:from-yellow-500 dark:to-red-500 font-bold text-xl ">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pl-[155px] pr-[155px] animate-slideInLeft">
        {serviceData.map((service, index) => (
          <ServiceItem
          key={index}
           title={service.title} 
           desc={service.desctiption} />
        ))}
      </div>
    </div>
  );
}
