const PrimaryButton = ({ textField }) => {
  return (
    <button className="btn bg-prime text-gray-100 border-none py-3 rounded-[4px] hover:bg-orange-700">
      {textField}
    </button>
  );
};

export default PrimaryButton;
