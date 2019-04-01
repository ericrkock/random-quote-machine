/* Random Quote Machine */
/* A Free Code Camp project challenge
** 
** Rules: read the README.md file */

// Import the JSON file
import quoteList from "./quotes.js";


const randomColor = ["crimson", "blue", "red", "black", "#ff5900", "deepskyblue", "#2f4155", '#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];


var actualQuote, actualAuthor;
var randomQuoteID, randomColorID;

var actualColorID = -1;
var actualQuoteID = -1;

// Apply First Quote to display
displayQuote();


// Define Button EventListener
document.querySelector('#tweet-quote').addEventListener('click', tweetQuote);
document.querySelector('#tumblr-quote').addEventListener('click', tumblrQuote);
document.querySelector('#new-quote').addEventListener('click', displayQuote);

function tweetQuote() {
   // Tweet active post on Twitter
   var url = "https://twitter.com/intent/tweet";
   var tweet = "Quote: " + actualQuote + " Author: " + actualAuthor;
   var hashtags="freecodecamp, randomquote";
   var via = "username";
   window.open(url+"?text="+tweet+";hashtags="+hashtags+";via="+via,"","width=550,height=400");
}

function tumblrQuote() {
   // Post active quote on Tumblr
   var url = "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,randomquote,freecodecamp&caption=";
   var post = "Quote: " + actualQuote + " Author: " + actualAuthor;
   window.open(url+post+"&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button");
}

function displayQuote() {
   
   randomQuoteID = Math.floor(Math.random() * quoteList.quotes.length);
   while (randomQuoteID === actualQuoteID) {
      randomQuoteID = Math.floor(Math.random() * quoteList.quotes.length);
   }
      
   // Random color and display new color
   randomColorID = Math.floor(Math.random() * randomColor.length);
   while (randomColorID === actualColorID) {
      randomColorID = Math.floor(Math.random() * randomColor.length);
   }
   document.documentElement.style.setProperty("--general", randomColor[randomColorID]);

   // Display Quote & Author
   document.getElementById('text'). textContent = quoteList.quotes[randomQuoteID].quote;
   document.getElementById('author').textContent = "-" + quoteList.quotes[randomQuoteID].author;

   
   actualQuote = quoteList.quotes[randomQuoteID].quote;
   actualAuthor = "-" + quoteList.quotes[randomQuoteID].author;
   actualQuoteID = randomQuoteID;
   actualColorID = randomColorID;
}

