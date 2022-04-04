/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


//Quotes Array: each object must contain a quote and source; if applicable also includes year, citation and tags.
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
 * `getRandomQuote` function: Selects a random object from the quotes array 
***/

let randomNum;
function getRandomQuote() {
  randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
}


/***
 * `printQuote` function: uses the getRandomQuote function and produces HTML needed to show quote and source as well as year, citation and tags where applicable.
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
    if ( quoteObject.tags ) {
      html = html + `<p class="tags">tags: ${quoteObject.tags.join(", ")}</p>`
    }
  document.getElementById('quote-box').innerHTML = html; 
 }


/***
 * click event listener for the print quote button
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
