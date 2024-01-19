import { useContext } from "react";
import { CONSTANTS } from "../Common/constants";
import Button from "../Components/Button";
import TextArea from "../Components/TextArea";
import TextField from "../Components/TextField";
import Proptypes from "prop-types";
import { DataCtx } from "../main";

// const RATING_IC = [
//   { icSrc: "public/ic_good.png", txt: "Good" },
//   { icSrc: "public/ic_better.png", txt: "Better" },
//   { icSrc: "public/ic_best.png", txt: "Best" },
// ];

const RenderForm = () => {
  const { submitHandler } = useContext(DataCtx);
  return (
    <>
      <form onSubmit={submitHandler} autoComplete="off">
        {CONSTANTS.FIELDS_META.map((fieldObj, idx) => {
          return (
            <div key={idx}>
              {fieldObj?.inputType === "txtField" ? (
                <TextField
                  label={fieldObj?.label}
                  fieldName={fieldObj?.fieldName}
                  placeHolderTxt={fieldObj?.placeHolderTxt}
                  fieldType={fieldObj?.fieldType}
                  fieldSize={fieldObj?.fieldSize}
                />
              ) : (
                <TextArea
                  label={fieldObj?.label}
                  fieldName={fieldObj?.fieldName}
                  placeHolderTxt={fieldObj?.placeHolderTxt}
                  fieldSize={fieldObj.fieldSize}
                />
              )}
            </div>
          );
        })}

        {/* todo - optional */}
        {/* <div className="flex justify-between items-center gap-5 my-9">
          {RATING_IC.map(({ icSrc, txt }, idx) => {
            return (
              <div
                className="flex items-center flex-col justify-center hover:scale-125 ease-in-out duration-300 hover:border focus:bg-[#FAF9F6] hover:text-[#000] p-3 rounded-lg"
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setRating(txt);
                }}
              >
                <img src={icSrc} className="w-[3rem] mb-2" />
                <p>{txt}</p>
              </div>
            );
          })}
        </div> */}
        <Button btnTxt={"Submit"} btnTyp={"submit"} />
      </form>
    </>
  );
};

export default RenderForm;

RenderForm.propTypes = {
  handler: Proptypes.func,
  setRating: Proptypes.any,
};
