export const LOGO =
  "https://my-youtube-eight-zeta.vercel.app/static/media/logo.d773e76f7c5c5a4d1ac7.png";

const GOOGLE_API_KEY = process.env.REACT_APP_API_KEY;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=chrome&q=";

export const CHANNEL_INFO_API =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLE_API_KEY;

// export const YOUTUBE_COMMENT_API =
// "https://www.googleapis.com/youtube/v3/commentThreads?key=" +
// GOOGLE_API_KEY +
// "&textFormat=plainText&part=snippet&videoId=";

export const LIVE_CHAT_COUNT = 25;
