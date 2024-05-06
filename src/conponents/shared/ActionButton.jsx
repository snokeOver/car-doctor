import { useContext } from "react";
import { DataContext } from "../../providers/DataProvider";
import ButtonSpinner from "./ButtonSpinner";

const ActionButton = ({ buttonText, handleButton }) => {
  const { pageLoading } = useContext(DataContext);
  return (
    <button className="btn btn-outline border-prime  text-prime  py-3 rounded-2xl hover:bg-prime hover:text-gray-100 hover:border-prime">
      {pageLoading && <ButtonSpinner />}
      {buttonText}
    </button>
  );
};

export default ActionButton;
