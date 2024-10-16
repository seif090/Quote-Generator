var quotesCollection = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
    photo: "oscar-wilde.jpg",
  },
  {
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    author: "Marilyn Monroe",
    photo: "marilyn-monroe.jpg",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
    photo: "albert-einstein.jpg",
  },
  {
    quote: "So many books, so little time.",
    author: "Frank Zappa",
    photo: "frank-zappa.jpg",
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
    photo: "marcus-tullius-cicero.jpg",
  },
  {
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "Bernard M. Baruch",
    photo: "bernard-m-baruch.jpg",
  },
  {
    quote:
      "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
    author: "William W. Purkey",
    photo: "william-w-purkey.jpg",
  },
  {
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "Dr. Seuss",
    photo: "dr-seuss.jpg",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
    photo: "mae-west.jpg",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
    photo: "mahatma-gandhi.jpg",
  },
  {
    quote: "We accept the love we think we deserve.",
    author: "Stephen Chbosky",
    photo: "stephen-chbosky.jpg",
  },
  {
    quote:
      "I am so clever that sometimes I don't understand a single word of what I am saying.",
    author: "Oscar Wilde",
    photo: "oscar-wilde.jpg",
  },
  {
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
    photo: "ralph-waldo-emerson.jpg",
  },
  {
    quote:
      "It is better to be hated for what you are than to be loved for what you are not.",
    author: "Andre Gide",
    photo: "andre-gide.jpg",
  },
];

var newQuote_button = document.getElementById("newQuote_button");
var quote_div = document.getElementById("quote");
var randomeNumber;

newQuote_button.onclick = displayQuote;

function displayQuote() {
  var randomQuote = getRandomQuote(quotesCollection);
  var resultQuote = `
    <div>
      <div class="photo">
        <img src="./images/authors/${randomQuote.photo}" alt="${randomQuote.author}" />
      </div>
      <div class="quote_body">
        <p>"${randomQuote.quote}"</p>
        <p>― ${randomQuote.author}</p>
      </div>
    </div>
  `;
  quote_div.innerHTML = resultQuote;
}

function getRandomQuote(quoteList) {
  for (
    var i = randomeNumber;
    i === randomeNumber;
    i = Math.floor(Math.random() * quoteList.length)
  ) {}
  randomeNumber = i;

  return quoteList[randomeNumber];
}
