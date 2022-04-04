/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

//quotes array
const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    source: "Oscar Wilde",
    year: 1890,
    tags: ["be-yourself", "honesty", "inspirational"]
  },
  {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    source: "Albert Einstein",
    year: 1940,
    tags: ["human-nature", "humor", "philosophy"]
  },
  {
    quote: "So many books, so little time.",
    source: "Frank Zappa",
    tags: ["books", "humor"]
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    source: "Mae West",
    tags: ["humor", "life", "inspirational"]
  },
  {
    quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    source: "J.K. Rowling",
    citation: "Harry Potter and the Goblet of Fire",
    year: 2000,
    tags: ["books", "honesty", "human-nature"]
  }
];




/***
 * `getRandomQuote` function
***/

let randomNum;
function getRandomQuote() {
  randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
}


/***
 * `printQuote` function
***/
 function printQuote() {
   let quoteObject = getRandomQuote();
   let html = `
      <p class="quote"> ${quoteObject.quote} </p>
      <p class="source"> ${quoteObject.source}
      `;
    if ( quoteObject.citation ) {
      html = html + `<span class="citation"> ${quoteObject.citation} </span>`
    }
    if ( quoteObject.year) {
      html = html + `<span class="year"> ${quoteObject.year} </span>`
    }
    html = html + `</p>`;
  return html;
 }

 finalString = printQuote();

 document.getElementById('quote-box').innerHTML = finalString; 


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
