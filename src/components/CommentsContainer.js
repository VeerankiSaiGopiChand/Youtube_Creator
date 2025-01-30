import React, { useState } from "react";

const commentsData = [
  {
    name: "John Doe",
    text: "This was an absolute game-changer! 🔥 Thanks for the amazing breakdown!",
    replies: [],
  },
  {
    name: "Sarah Smith",
    text: "Loved the explanation! You make complex topics so simple. Subscribed! 🎉",
    replies: [
      {
        name: "Mark Watson",
        text: "Totally agree! This guy is seriously underrated.",
        replies: [],
      },
      {
        name: "Emily Johnson",
        text: "Same here! Best tutorial I've watched in a while. 👏",
        replies: [
          {
            name: "David Brown",
            text: "Right? His explanations are crystal clear. 🤩",
            replies: [
              {
                name: "Chris Evans",
                text: "Exactly! YouTube needs more content like this. 👍",
                replies: [
                  {
                    name: "Mike Wilson",
                    text: "If only school teachers explained stuff this well! 😂",
                    replies: [
                      
                    ],
                  },
                  {
                    name: "Sophia Martinez",
                    text: "The visuals and animations made it even better! 🎨",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Alex Turner",
    text: "Bro, your videos always save me before my exams. Huge respect! 🙌",
    replies: [],
  },
  {
    name: "Jessica Green",
    text: "Never knew this concept could be so simple! Thanks a ton. ❤️",
    replies: [],
  },
  {
    name: "Michael Scott",
    text: "The way you structured the content was perfect. Keep up the great work! 💯",
    replies: [],
  },
];

const Comment = ({ name, text, replies }) => {
  const [showReplies, setShowReplies] = useState(false); // State to toggle replies visibility

  return (
    <div className="flex items-start space-x-3 my-4 p-3 rounded-lg bg-gray-100 shadow-md">
      <img
        src={`https://i.pravatar.cc/40?u=${name}`}
        alt={name}
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col w-full">
        <p className="font-medium text-gray-900">{name}</p>
        <p className="text-gray-700 text-sm">{text}</p>

        {/* Show/Hide Replies Button */}
        {replies.length > 0 && (
          <button
            onClick={() => setShowReplies(!showReplies)}
            className="text-blue-600 mt-2"
          >
            {showReplies ? "Hide Replies" : "Show Replies"}
          </button>
        )}

        {/* Display Replies directly under each comment if showReplies is true */}
        {showReplies && replies.length > 0 && (
          <div className="ml-10 mt-2 border-l border-blue-300 pl-4">
            {replies.map((reply, index) => (
              <Comment key={index} {...reply} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Comments</h2>
      {commentsData.map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}
    </div>
  );
};

export default CommentsContainer;
