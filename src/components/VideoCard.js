import React from "react";
import useChannelDetails from "../utils/useChannelDetails";

const VideoCard = ({ info }) => {

  console.log(info);

  const { snippet, statistics } = info;
  const { channelTitle,channelId, title, thumbnails } = snippet;

  
  const [channelImage] = useChannelDetails(channelId);

  return (
    <div className="p-2 m-2 w-72 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
  <img
    className="rounded-lg w-full"
    alt="thumbnail"
    src={thumbnails.medium.url}
  />
   <div className="flex items-center gap-2">
          <img
            src={channelImage}
            alt={channelTitle + " image"}
            className="rounded-full w-10 h-10"
          />
          <li className="font-bold line-clamp-2">{title}</li>
        </div>
  <div className="flex mt-2">
    
    <div>
      <p className="text-sm text-gray-600">{channelTitle}</p>
      <p className="text-sm text-gray-600">{statistics.viewCount} views</p>
    </div>
  </div>
</div>

  
  );
};

export default VideoCard;