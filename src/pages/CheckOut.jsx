import { useContext, useEffect, useState } from "react";
import ActionButton from "../conponents/shared/ActionButton";

import { AuthContext } from "../providers/AuthProvider";
import { DataContext } from "../providers/DataProvider";
import axios from "axios";

const CheckOut = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const { user } = useContext(AuthContext);
  const { setPageLoading } = useContext(DataContext);
  const { checkOutId, services } = useContext(DataContext);
  const [selectedService, setSelectedService] = useState({});

  //Set the selected Services
  useEffect(() => {
    const newService = services.filter((service) => service._id === checkOutId);
    setSelectedService(...newService);
  }, []);

  const [formData, setFormData] = useState({
    uid: user.uid,
    userName: "",
    date: "",
    email: user?.email,
    amount: selectedService.price,
    status: "pending",
  });

  // Update the amount
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      amount: selectedService.price,
    }));
  }, [selectedService]);

  // handle the change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // handle the checkout button
  const handleCheckOut = async (e) => {
    e.preventDefault();
    setPageLoading(true);
    try {
      const response = axios.post(`${baseUrl}/api/checkout`, formData);
      if (response) {
        setPageLoading(false);
      }
    } catch (err) {
      console.log(err.message);
      setPageLoading(false);
    }
  };

  return (
    <div>
      <div className="relative">
        <img
          src="../../public/images/checkout/checkout.png"
          alt=""
          className="w-full"
        />
        <div className="absolute  top-0 h-full w-full flex items-center bg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
          <h3 className=" text-gray-100 text-3xl md:text-4xl font-semibold pl-10">
            Check Out
          </h3>
        </div>
        <div className="absolute bottom-0 left-1/2 py-1 px-7 bg-prime">
          <p className="text-gray-100">Home/Checkout</p>
        </div>
      </div>
      <div className="my-20">
        <div className="card  mx-auto  rounded-none bg-base-100 ">
          <form
            className="card-body bg-[#F3F3F3] dark:bg-gray-800"
            onSubmit={handleCheckOut}
          >
            <div>
              <h2 className="font-semibold text-center mb-5 text-2xl">
                {selectedService.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
              <div className="form-control">
                <input
                  name="email"
                  value={formData.email || ""}
                  className="input input-bordered"
                  readOnly
                />
              </div>
              <div className="form-control">
                <input
                  name="amount"
                  value={`$ ${formData.amount || ""}`}
                  className="input input-bordered"
                  readOnly
                />
              </div>
              <div className="form-control">
                <input
                  onChange={handleChange}
                  name="userName"
                  value={formData.userName || ""}
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  onChange={handleChange}
                  name="date"
                  value={formData.date || ""}
                  type="date"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="form-control mt-6">
              <ActionButton buttonText="Check Out" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
