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
    <div className="flex flex-col w-full bg-gray-100 min-h-screen">
      <div className="px-5 flex flex-col lg:flex-row w-full gap-5">
        <div className="flex-1 bg-black rounded-xl overflow-hidden shadow-md">
          <iframe
            className="w-full h-[300px] lg:h-[600px]"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="lg:w-1/3 bg-white rounded-xl shadow-md p-4">
          <LiveChat />
        </div>
      </div>
      <div className="mt-5 px-5">
      <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;