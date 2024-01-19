import PropTypes from "prop-types";

const Button = (props) => {
  const { btnTxt, clickHandler, btnTyp } = props;

  //   const onClickHandler = () => {
  //     return clickHandler;
  //   };

  return (
    <>
      <div className="my-7">
        <button
          className="text-[#000] bg-[#fff] hover:bg-[#c4c4c4] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          type={btnTyp}
        >
          {btnTxt}
        </button>
      </div>
    </>
  );
};

export default Button;

Button.propTypes = {
  btnTxt: PropTypes.string,
  clickHandler: PropTypes.func,
  btnTyp: PropTypes.string,
};
