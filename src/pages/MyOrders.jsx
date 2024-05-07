import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../providers/DataProvider";
import { AuthContext } from "../providers/AuthProvider";
import CartCard from "../conponents/CartCard";
import PageSkeleton from "../conponents/shared/PageSkeleton";
const MyOrders = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const { pageLoading, setPageLoading } = useContext(DataContext);
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  // Fetch all the checkout from Database
  useEffect(() => {
    setPageLoading(true);
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/checkouts/${user.uid}`
        );
        if (response) {
          setOrders(response.data);
          setPageLoading(false);
        }
      } catch (err) {
        console.log(err.message);
        setPageLoading(false);
      }
    };
    fetchOrders();
  }, []);

  // console.log(orders);
  return (
    <>
      {pageLoading ? (
        <PageSkeleton />
      ) : (
        <div>
          <div className="relative">
            <img
              src="../../public/images/checkout/checkout.png"
              alt=""
              className="w-full"
            />
            <div className="absolute  top-0 h-full w-full flex items-center bg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
              <h3 className=" text-gray-100 text-3xl md:text-4xl font-semibold pl-10">
                Cart Details
              </h3>
            </div>
          </div>
          <div className="my-20  px-2">
            <div className="overflow-x-auto">
              <table className="table">
                <tbody>
                  {/* row 1 */}
                  {orders.map((order) => (
                    <CartCard key={order._id} order={order} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyOrders;
