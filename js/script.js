/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array with objects.
***/

const quotes = [
  
  {
    quote: 'The function of education is to teach one to think intensively and to think critically. Intelligence plus character – that is the goal of true education.',
    source: 'Martin Luther King Jr.',
    citation: 'During a speech at Morehouse College.',
    year: 1948, 
    tags: ' Educational, Motivational'
  },
  {
    quote: 'It always seems impossible until it is done.',
    source: 'Nelson Mandela',
    citation: 'Speech delivered by Nelson Mandela.',
    year: 2001
  },
  {
    quote: 'When you learn, teach. When you get, give.',
    source: 'Maya Angelou', 
    citation: '@InspiringThinkn. Motivational-Inspirational-World.Blogspot.com'
  },
  {
    quote: 'Education is our passport to the future, for tomorrow belongs to the people who prepare for it today.',
    source: 'El Hajj Malik El-Shabazz, (Malcom X)',
    citation: 'Speech delivered at the founding rally of the Organization of Afro-American Unity (OAAU).',
    year: 1962,
    tags: ' Motivation'
  },
  {
    quote: 'If there is no struggle, there is no progress.',
    source: 'Frederick Douglass',
    citation: 'Frederick Douglass Biography: From Slave to Abolitionist.'
  }

];
  
/***
 * `getRandomQuote` function. This function creates a random number by the length of any given array that is pasted into it
 * starting with zero to the index of the last item in the array
***/
function getRandomQuote (array) {
  const randomNum = Math.floor(Math.random() * array.length);
  return array[randomNum];    // returns a random object inside of the quotes array
}
 getRandomQuote(quotes);      // calling the functions with the 'quotes' array as an arguement

/***
 * `printQuote` function
***/
 // prints the random quote, and builds a new html statement, displaying the new html statement to the browser
function printQuote () {
  const randomQuo = getRandomQuote(quotes);
   let html = `
    <p class="quote">${randomQuo.quote}</p>
    <p class="source">${randomQuo.source}
  `;

  if ( randomQuo.citation ) {
    html += '<span ' + 'class="citation">' + `${randomQuo.citation}` + '</span>';
    if ( randomQuo.year ) {
      html += '<span ' + 'class="year">' + `${randomQuo.year}` + '</span>';
      if ( randomQuo.tags ) {
        html += '<span ' + 'class="tags">' + `${randomQuo.tags}` + '</span>';
      }
    }
  }
  html += '</p>';

  document.getElementById('quote-box').innerHTML = html;
};
  // This function updates the background to a random color. https://css-tricks.com/snippets/javascript/random-hex-color/
  const getRandomColor = () => {          // Arrow function with a implicit return
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const main = document.body;
  main.style.backgroundColor = '#' + randomColor;
};

  // This function automatically updates the quotes & background color at regular intervals. https://www.w3schools.com/jsref/met_win_setinterval.asp
 let setQuote;
 let setBg;
 function autoUpdate() {
  setQuote = setInterval( function() { printQuote(); }, 12000 );
  setBg = setInterval( function() { getRandomColor(); }, 10000 );

};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

 document.getElementById('load-quote').addEventListener("click", printQuote, false);
 // click event listener for the getRandomColor()
 document.getElementById('load-quote').addEventListener("click", getRandomColor);
 // click event listener for the autoUpdate()
 document.getElementById('load-quote').addEventListener("click", autoUpdate);