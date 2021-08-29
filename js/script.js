/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  
  {
    quote: 'The function of education is to teach one to think intensively and to think critically. Intelligence plus character – that is the goal of true education.',
    source: 'Martin Luther King Jr.',
    citation: 'During a speech at Morehouse College.',
    year: 1948
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
    year: 1962
  },
  {
    quote: 'If there is no struggle, there is no progress.',
    source: 'Frederick Douglass',
    citation: 'Frederick Douglass Biography: From Slave to Abolitionist.'
  }

];
// console.log(quotes);
/***
 * `getRandomQuote` function
***/
function getRandomQuote (array) {
  const randomNum = Math.floor(Math.random() * array.length);
  // console.log( randomNum, array[randomNum]  );
  return array[randomNum];
}
 getRandomQuote(quotes);

/***
 * `printQuote` function
***/
function printQuote () {
  const randomQuo = getRandomQuote(quotes);
  let html = `
    <p class="quote">${randomQuo.quote}</p>
    <p class="source">${randomQuo.source}
  `;
  // console.log(html);           
  if ( randomQuo.citation ) {
    html += '<span ' + 'class="citation">' + `${randomQuo.citation}` + '</span>';
    if ( randomQuo.year ) {
      html += '<span ' + 'class="year">' + `${randomQuo.year}` + '</span>';
    }
  }
    html += '</p>';
  // console.log(html);
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);