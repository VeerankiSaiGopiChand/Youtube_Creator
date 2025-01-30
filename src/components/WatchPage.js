import React, { useEffect} from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {

  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(closeMenu(false));
  }, [dispatch]);

  




  return (
    <div className="flex flex-col w-full bg-gray-50 min-h-screen">
      {/* Video & Live Chat Section */}
      <div className="px-5 flex flex-col lg:flex-row w-full gap-5 mt-5">
        {/* Video Player */}
        <div className="flex-1 bg-black rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-[300px] sm:h-[400px] lg:h-[600px] rounded-xl"
            src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* Live Chat Section */}
        <div className="lg:w-1/3 bg-white rounded-xl shadow-md p-4 border border-gray-200">
          <h2 className="text-lg font-bold text-gray-800 mb-2">Live Chat</h2>
          <LiveChat />
        </div>
      </div>

      {/* Comments Section */}
      <div className="mt-8 px-5">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Comments</h2>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;