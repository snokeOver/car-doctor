import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [pageLoading, setPageLoading] = useState(false);
  const defaultTheme = "dark";
  const [currTheme, setCurrTheme] = useState(defaultTheme);
  const [services, setServices] = useState([]);
  const [checkOutId, setCheckOutId] = useState("");

  // Fetch all the services from Database
  useEffect(() => {
    setPageLoading(true);
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/services`);
        if (response) {
          setServices(response.data);
          setPageLoading(false);
        }
      } catch (err) {
        console.log(err.message);
        setPageLoading(false);
      }
    };
    fetchServices();
  }, []);

  const dataItems = {
    currTheme,
    setCurrTheme,
    pageLoading,
    setPageLoading,
    services,
    checkOutId,
    setCheckOutId,
  };

  return (
    <DataContext.Provider value={dataItems}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
