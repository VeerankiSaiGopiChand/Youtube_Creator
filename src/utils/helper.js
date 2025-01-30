// Anime-inspired name list for realistic chat names
const nameList = [
  "Naruto", "Sakura", "Sasuke", "Luffy", "Zoro", "Nami", "Shanks", "Kamina", "Yoko", 
  "Goku", "Vegeta", "Gohan", "Piccolo", "Kakashi", "Hinata", "Jiraiya", "Iruka", 
  "Kaguya", "Mikasa", "Eren", "Armin", "Levi", "Sasha", "Kenny", "Tanjiro", "Nezuko", 
  "Zenitsu", "Inosuke", "Rengoku", "Shinobu", "Yoriichi", "Kanao", "Kanao", "Mugen", 
  "Hina", "Hinagiku", "Asuna", "Kirito", "Saber", "Rintarou", "Yukino", "Ayame", "Rei", 
  "Shinji", "Misato", "Kaworu", "Ayanami", "Ryuji", "Ann", "Makoto", "Futaba", "Yusuke", 
  "Haru", "Madarame", "Futaba", "Takamura", "Yami", "Asta", "Yuno", "Noelle", "Luck", 
  "Fanzell", "Saitama", "Genos", "Mumen", "Tatsumaki", "Fubuki", "Mob", "Reigen", 
  "Shigeo", "Akira", "Kenshin", "Makunouchi", "Hachiman", "Kaguya", "Ai", "Kyouko", 
  "Kenshiro", "Natsu", "Gray", "Lucy", "Erza", "Wendy", "Mirajane", "Levy", "Gajeel", 
  "Mashima", "Yui", "Kirishima", "Ishida", "Ichigo", "Rukia", "Renji", "Orihime", 
  "Ulquiorra", "Gin", "Byakuya", "Aizen", "Uryuu", "Rokuro", "Benimaru", "Shura", 
  "Kiryuu", "Shun", "Mikado", "Yukari", "Mitsuha", "Taki", "Katsuya", "Yuna", "Airi"
];

// Function to generate a random anime name from the list
export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

// Improved random message generation for live chat-like messages
export function makeRandomMessage(length) {
  const sampleMessages = [
    "Great video! 👍",
    "This was awesome! 😎",
    "I can't stop laughing 😂",
    "What did I just watch? 🤔",
    "Love this! Keep it up! ❤️",
    "Subscribed! 🙌",
    "This tutorial helped so much! 👏",
    "Anyone else here after the latest update? 👀",
    "Why is this video so underrated? 🔥",
    "Who's here before 1 million views? 🙏",
    "Check out my channel! 🔔",
    "I don't get it... but it’s cool 😂",
    "Where can I find the source code? 🔍",
    "This is next-level content. 🔥",
    "I’m dying to see more of this content! 🙏",
    "Anyone know the song in the background? 🎶",
    "This is a masterpiece! 💯",
    "Just joined the community! 😄",
    "Can you make a tutorial on this? 🙌",
    "What was the point of that? 🤔",
    "So relatable! 😂",
    "Best channel ever! 🎉",
    "You nailed it! 👏",
    "This is a game-changer! 💡",
    "Love your energy! 🔥",
    "What’s the next video about? 🤩",
    "Who else thought the same thing? 😂",
    "This video is a vibe! 💯",
    "How do you come up with these ideas? 🤯"
  ];

  // Return a random message from the list
  return sampleMessages[Math.floor(Math.random() * sampleMessages.length)];
}
