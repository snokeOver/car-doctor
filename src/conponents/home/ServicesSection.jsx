import { useContext, useEffect, useState } from "react";
import PageTitle from "../shared/PageTitle";
import ServiceCard from "./ServiceCard";
import SecondaryButton from "../shared/SecondaryButton";
import { DataContext } from "../../providers/DataProvider";

const ServicesSection = () => {
  const { services } = useContext(DataContext);

  return (
    <div className="bg-base-200 py-10">
      <PageTitle
        topper="Services"
        title=" Our Service Area"
        message="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8 px-2 md:px-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <SecondaryButton textField="View All" />
      </div>
    </div>
  );
};

export default ServicesSection;
