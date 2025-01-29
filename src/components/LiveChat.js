import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {

  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {

    const i = setInterval(() => {
      // API Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + " 🚀",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, [dispatch]);

  return (
    <>
    <div className="w-full h-[300px] lg:h-[600px] p-4 border border-gray-300 bg-slate-50 rounded-xl overflow-y-scroll flex flex-col-reverse shadow-sm">
      <div>
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
    </div>
    <form
      className="w-full p-4 mt-3 border border-gray-300 bg-white rounded-xl shadow-sm"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          addMessage({
            name: "Gopi Chand",
            message: liveMessage,
          })
        );
        setLiveMessage("");
      }}
    >
      <div className="flex items-center gap-3">
        <input
          className="px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Type your message..."
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-green-600">Send</button>
      </div>
    </form>
  </>
  );
};

export default LiveChat;