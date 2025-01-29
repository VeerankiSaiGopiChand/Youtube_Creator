export const LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png";

const GOOGLE_API_KEY =process.env.REACT_APP_API_KEY;

export const YOUTUBE_VIDEOS_API ="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=IN&key=" + GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "https://api.codetabs.com/v1/proxy?quest=" +
  encodeURIComponent(
    "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
  );

  export const CHANNEL_INFO_API =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLE_API_KEY ;

  
// export const YOUTUBE_COMMENT_API =
// "https://www.googleapis.com/youtube/v3/commentThreads?key=" +
// GOOGLE_API_KEY +
// "&textFormat=plainText&part=snippet&videoId=";

export const LIVE_CHAT_COUNT = 25;