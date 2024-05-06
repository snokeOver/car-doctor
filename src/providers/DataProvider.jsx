import { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [pageLoading, setPageLoading] = useState(false);
  const defaultTheme = "dark";
  const [currTheme, setCurrTheme] = useState(defaultTheme);
  const dataItems = { currTheme, setCurrTheme, pageLoading, setPageLoading };
  return (
    <DataContext.Provider value={dataItems}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
