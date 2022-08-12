
//Lesson 84 Regular Expressions


newSubject('Flags','Flags que podem ser usadas');

let re;

// Literal Characters
re = /hello/;

re = /hello/i; //i case insensitive

// Metacharacter Symbols
re = /^h/i; // ^ Must start with in this case must starts with an h
re = /d$/i; // $ Must ends with in this case must ends with an d
re = /^hello$/i; // Must starts and ends with hello
re = /h.llo$/i; // . Matches any ONE charactere that is on the dot place hrllo, hello, hillo, hwllo, hgloo
re = /h*llo$/i; // * Matches any character 0 or more times heello, hiillo,hrrllo,h11llo até mesmo sem nada como hllo
re = /gre?a?y/i; // ? Makes an charactere optional in this case e and a are optional grey, gray and gry maches
re = /gre?a?y\?/i; // ? Escape character. In this case we want the question mark to be required so to do that we need to escape the question mark, otherwise the y will be optional, to do that we add \ in front of the charactere. will match grey?, gray?, gry?

// Brackets [] - Character Sets
re = /gr[ae]y/i;        // Must be an a or e
re = /[GF]ray/i;        // Must be a G or F
re = /[^GF]ray/i;       // Match anything except a G or F Inside [] except
re = /^[GF]ray/i;       // Must start with G or F outside [] must be
re = /[A-Z]ray/;        // Match any uppercase letter
re = /[a-z]ray/;        // Match any lowercase letter
re = /[A-Za-z]ray/;     // Match any  letter
re = /[0-9][0-9]ray/;   // Match any dig

// Braces {} - Quantifiers
re = /Hel{2}o/i;        // Must occur exactly {num} amount of times, in this case two l hello maches helo doesen't
re = /Hel{2,4}o/i;      // Must occur between {num} amount of times, in this case two to four times hello maches hellllo maches helo doesn't
re = /Hel{2,}o/i;       // Must occur at least {num} times, in this case hello maches, helllllllllllo maches and helo doesen't

// Paretheses () - Grouping
re = /^([0-9]x){3}$/  // Must start with a number 0-9 and x three times 9x1x0x matches 9x1x doesn't 9e0e6e does't

// Shorthand Character Classes
re = /\w/;      // Word character - alphanumeric any letter, any number or _
re = /\w+/;     // + = one or more word charactere !,(),; doesn't match, it has to be a letter a number or underscore _
re = /\W/;      // Non-Word character, anything but word characteres match a,9 doesn't match ! match
re = /\d/;      // Match any digit
re = /\d+/;     // Match any digit 0 or more times
re = /\D/;      // Match any Non-digit
re = /\s/;      // Match whitespace char
re = /\S/;      // Match non-whitespace char
re = /Hell\b/i; // Word boundary in "Hello, welcome to the Hell" without the \b the match will occur in (Hell of Hello) and with \b it will occur at the Hell itself because \b indicate that the frame string must be exact.

// Assertions
re = /x(?=y)/;  // Match x only if followed by y
re = /x(?!y)/;  // Match x only if NOT followed by y

// String to match
const str = 'Tray?';

// Log Results
const result = re.exec(str);
console.log(result);


// Function to test regular expressions
function reTest(re, str){
  if(re.test(str)){
    console.log(`${str} matched the ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);


//função para apresentar o título e descrição
function newSubject(title,description=''){
  console.log(`****************************************************`);
  console.log(title);
  console.log(description);
  console.log(`****************************************************`);
 
}
