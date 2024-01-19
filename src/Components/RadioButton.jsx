const RadioButton = () => {
  return (
    <>
      <div className="flex items-center mb-4">
        <input
          id="default-radio-1"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 text-[#fff]"
        />
        <label className="ms-2 text-sm">Default radio</label>
      </div>
    </>
  );
};

export default RadioButton;
