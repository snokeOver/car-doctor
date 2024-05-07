import { useContext } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { DataContext } from "../../providers/DataProvider";

const ServiceCard = ({ service }) => {
  const { setCheckOutId } = useContext(DataContext);
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="px-3 pt-3">
        <img src={service.img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service.title}</h2>

        <div className="card-actions flex justify-between text-prime">
          <p className=""> price: {service.price}</p>

          <Link
            to={`/checkOut/${service.title}`}
            onClick={() => setCheckOutId(service._id)}
          >
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
