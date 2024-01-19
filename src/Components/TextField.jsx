import PropTypes from "prop-types";

const TextField = (props) => {
  const {
    label,
    fieldName,
    fieldId,
    placeHolderTxt,
    fieldType,
    isRadio = false,
  } = props;

  return (
    <>
      <div
        className={`my-7 ${
          isRadio ? `flex  flex-col justify-center mb-4` : ``
        }`}
      >
        <label className="block mb-2 text-sm font-medium">{label}</label>
        <input
          type={fieldType}
          name={fieldName}
          id={fieldId || fieldName}
          className={`${
            isRadio
              ? `w-4 h-4 text-[#fff]`
              : `outline-none text-sm rounded-lg w-full p-2.5 placeholder:text-sm`
          }`}
          placeholder={placeHolderTxt}
          required
        />
      </div>
    </>
  );
};

export default TextField;

TextField.propTypes = {
  label: PropTypes.string,
  fieldType: PropTypes.string,
  fieldName: PropTypes.string,
  fieldId: PropTypes.any,
  placeHolderTxt: PropTypes.string,
  isRadio: PropTypes.bool,
};
