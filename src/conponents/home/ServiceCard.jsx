import { FaArrowRight } from "react-icons/fa6";

const ServiceCard = ({ service, handleServie }) => {
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="px-3 pt-3">
        <img src={service.img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service.title}</h2>

        <div className="card-actions flex justify-between text-prime">
          <p className=""> price: {service.price}</p>
          <button className="">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
