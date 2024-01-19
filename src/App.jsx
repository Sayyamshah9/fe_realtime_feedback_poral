import { useEffect, useRef, useState } from "react";
import RenderForm from "./Layouts/FormFields";
import io from "socket.io-client";
import { DataCtx } from "./main";
import { CONSTANTS } from "./Common/constants";
import FeedbackView from "./Layouts/Feedback";

const App = () => {
  // const [rating, setRating] = useState("Good");
  const [feedbackData, setFeedbackData] = useState([]);
  const socketRef = useRef(null);

  const { SEND_DATA } = CONSTANTS.SERVER_EVENTS;

  useEffect(() => {
    const serverUrl = import.meta.env.VITE_SERVER_URL;
    socketRef.current = io(serverUrl);

    socketRef.current.on(SEND_DATA, (response) => {
      setFeedbackData(response);
    });

    // return () => {
    //   socketRef.current.disconnect();
    // };
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    let _payload = {
      name: e.target.name.value,
      emailId: e.target.emailId.value,
      message: e.target.feedbackMsg.value,
    };

    socketRef.current.emit(SEND_DATA, _payload);
  };

  // window.scrollTo(0, 0);

  return (
    <>
      <DataCtx.Provider value={{ feedbackData, submitHandler }}>
        <div className="md:flex justify-around mx-12">
          <div className="mt-9 md:w-1/2">
            <p className="font-extrabold text-5xl">Feedback Form</p>
            <hr className="my-7" />
            <RenderForm />
          </div>
          <div className="m-5 md:w-1/2">
            <FeedbackView />
          </div>
        </div>
      </DataCtx.Provider>
    </>
  );
};

export default App;
