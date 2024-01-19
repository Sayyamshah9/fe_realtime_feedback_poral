import { useContext } from "react";
import { DataCtx } from "../main";

const FeedbackView = () => {
  const { feedbackData } = useContext(DataCtx);

  const dataArray = feedbackData?.length > 0 ? feedbackData : [];

  return (
    <>
      <div className="h-screen md:overflow-y-auto mt-5 pb-[7rem]">
        <p className="font-extrabold">{`Here's what your user say about you...`}</p>
        <p className="text-xs mt-2">{`Total Reviews: ${dataArray.length}`}</p>
        {dataArray?.length > 0 ? (
          <div>
            {dataArray.map(({ name, emailId, message, rating }, idx) => {
              return (
                <div
                  className="bg-[#e5e5e50e] p-3 my-5 rounded-lg shadow-lg"
                  key={idx}
                >
                  <p className="text-md">{message}</p>
                  <p className="text-sm mt-3 font-medium text-[#e5e5e58c]">
                    {name} | {emailId}
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="mt-7">{"No Feedbacks yet..."}</p>
        )}
      </div>
    </>
  );
};

export default FeedbackView;
