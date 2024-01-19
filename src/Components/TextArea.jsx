import PropTypes from "prop-types";
const TextArea = (props) => {
  const { label, fieldName, fieldId, fieldSize, placeHolderTxt } = props;
  return (
    <>
      <div className="my-7">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {label}
        </label>
        <textarea
          id={fieldId || fieldName}
          name={fieldName}
          rows={fieldSize}
          className="outline-none block p-2.5 w-full text-sm rounded-lg"
          placeholder={placeHolderTxt}
        ></textarea>
      </div>
    </>
  );
};

export default TextArea;

TextArea.propTypes = {
  label: PropTypes.string,
  fieldType: PropTypes.string,
  fieldName: PropTypes.string,
  fieldSize: PropTypes.string,
  fieldId: PropTypes.any,
  placeHolderTxt: PropTypes.string,
};
