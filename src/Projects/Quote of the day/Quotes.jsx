const quotes = [
  {
    quote: "Believe you can and you're halfway there.",
    name: "Theodore Roosevelt",
  },
  {
    quote:
      "The only limit to our realization of tomorrow is our doubts of today.",
    name: "Franklin D. Roosevelt",
  },
  { quote: "Dream big and dare to fail.", name: "Norman Vaughan" },
  {
    quote:
      "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    name: "Zig Ziglar",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    name: "Confucius",
  },
  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    name: "Winston Churchill",
  },
  { quote: "Everything you can imagine is real.", name: "Pablo Picasso" },
  {
    quote: "Start where you are. Use what you have. Do what you can.",
    name: "Arthur Ashe",
  },
  {
    quote: "Act as if what you do makes a difference. It does.",
    name: "William James",
  },
  {
    quote:
      "Hardships often prepare ordinary people for an extraordinary destiny.",
    name: "C.S. Lewis",
  },
  {
    quote: "Life is 10% what happens to us and 90% how we react to it.",
    name: "Charles R. Swindoll",
  },
  {
    quote: "The best way to predict the future is to create it.",
    name: "Peter Drucker",
  },
  { quote: "An unexamined life is not worth living.", name: "Socrates" },
  {
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    name: "Ralph Waldo Emerson",
  },
  {
    quote:
      "Life isn't about finding yourself. Life is about creating yourself.",
    name: "George Bernard Shaw",
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    name: "Albert Einstein",
  },
  { quote: "Turn your wounds into wisdom.", name: "Oprah Winfrey" },
  {
    quote: "The journey of a thousand miles begins with one step.",
    name: "Lao Tzu",
  },
  {
    quote: "Life is really simple, but we insist on making it complicated.",
    name: "Confucius",
  },
  {
    quote: "He who opens a school door, closes a prison.",
    name: "Victor Hugo",
  },
  {
    quote: "Don’t watch the clock; do what it does. Keep going.",
    name: "Sam Levenson",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    name: "Henry David Thoreau",
  },
  {
    quote: "Push yourself, because no one else is going to do it for you.",
    name: "Unknown",
  },
  { quote: "Great things never come from comfort zones.", name: "Unknown" },
  {
    quote:
      "The harder you work for something, the greater you’ll feel when you achieve it.",
    name: "Unknown",
  },
  {
    quote: "Success doesn’t just find you. You have to go out and get it.",
    name: "Unknown",
  },
  { quote: "Dream it. Wish it. Do it.", name: "Unknown" },
  {
    quote: "Don’t stop when you’re tired. Stop when you’re done.",
    name: "Unknown",
  },
  {
    quote: "Wake up with determination. Go to bed with satisfaction.",
    name: "Unknown",
  },
  {
    quote: "Do something today that your future self will thank you for.",
    name: "Unknown",
  },
  {
    quote: "The mind is everything. What you think you become.",
    name: "Buddha",
  },
  {
    quote: "Change your thoughts and you change your world.",
    name: "Norman Vincent Peale",
  },
  {
    quote: "Whether you think you can or you think you can’t, you’re right.",
    name: "Henry Ford",
  },
  { quote: "Your limitation—it’s only your imagination.", name: "Unknown" },
  {
    quote:
      "Stay away from negative people. They have a problem for every solution.",
    name: "Albert Einstein",
  },
  { quote: "Be so good they can’t ignore you.", name: "Steve Martin" },
  {
    quote: "A comfort zone is a beautiful place, but nothing ever grows there.",
    name: "Unknown",
  },
  {
    quote: "Success is what happens after you’ve survived all your mistakes.",
    name: "Unknown",
  },
  {
    quote:
      "You are braver than you believe, stronger than you seem, and smarter than you think.",
    name: "A.A. Milne",
  },
  {
    quote: "Failure is the condiment that gives success its flavor.",
    name: "Truman Capote",
  },
  { quote: "Stay hungry. Stay foolish.", name: "Steve Jobs" },
  { quote: "Less talk. More action.", name: "Unknown" },
  { quote: "Just keep going.", name: "Unknown" },
  { quote: "You got this.", name: "Unknown" },
  { quote: "Make it happen.", name: "Unknown" },
  { quote: "Do it scared.", name: "Unknown" },
  { quote: "Progress, not perfection.", name: "Unknown" },
  { quote: "Keep it simple.", name: "Unknown" },
  { quote: "You are enough.", name: "Unknown" },
  { quote: "Trust the process.", name: "Unknown" },
  {
    quote: "To love oneself is the beginning of a lifelong romance.",
    name: "Oscar Wilde",
  },
  {
    quote: "No one can make you feel inferior without your consent.",
    name: "Eleanor Roosevelt",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    name: "Oscar Wilde",
  },
  {
    quote:
      "Confidence comes not from always being right but from not fearing to be wrong.",
    name: "Unknown",
  },
  {
    quote: "She remembered who she was and the game changed.",
    name: "Unknown",
  },
  {
    quote: "Love yourself first, and everything else falls into line.",
    name: "Lucille Ball",
  },
  {
    quote:
      "There’s no comparison between the sun and the moon. They shine when it’s their time.",
    name: "Unknown",
  },
  {
    quote:
      "Your value doesn’t decrease based on someone’s inability to see your worth.",
    name: "Unknown",
  },
  { quote: "You are the CEO of your own life.", name: "Unknown" },
  {
    quote: "You alone are enough. You have nothing to prove to anyone.",
    name: "Maya Angelou",
  },
  { quote: "Creativity is intelligence having fun.", name: "Albert Einstein" },
  {
    quote: "You can’t use up creativity. The more you use, the more you have.",
    name: "Maya Angelou",
  },
  {
    quote: "Imagination is more important than knowledge.",
    name: "Albert Einstein",
  },
  { quote: "Every artist was first an amateur.", name: "Ralph Waldo Emerson" },
  {
    quote:
      "Don’t be satisfied with stories, how things have gone with others. Unfold your own myth.",
    name: "Rumi",
  },
  {
    quote:
      "Art enables us to find ourselves and lose ourselves at the same time.",
    name: "Thomas Merton",
  },
  {
    quote: "Inspiration exists, but it has to find you working.",
    name: "Pablo Picasso",
  },
  { quote: "Create with the heart; build with the mind.", name: "Unknown" },
  { quote: "The creative adult is the child who survived.", name: "Unknown" },
  { quote: "Your only limit is your mind.", name: "Unknown" },
  { quote: "Chill out, you’re doing fine.", name: "Unknown" },
  { quote: "Take it easy but take it.", name: "Woody Guthrie" },
  { quote: "Go with the flow.", name: "Unknown" },
  { quote: "Let that sh*t go.", name: "Unknown" },
  { quote: "Peace begins with a smile.", name: "Mother Teresa" },
  {
    quote:
      "Slow down and everything you are chasing will come around and catch you.",
    name: "John De Paola",
  },
  {
    quote: "You can’t pour from an empty cup. Take care of yourself first.",
    name: "Unknown",
  },
  { quote: "Smile. It confuses people.", name: "Unknown" },
  {
    quote: "Life’s too short to stress over things you can’t control.",
    name: "Unknown",
  },
  { quote: "Breathe. It’s just a bad day, not a bad life.", name: "Unknown" },
];

export default quotes;
