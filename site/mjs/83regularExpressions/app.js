
//Lesson 83 Regular Expressions
let re;
re = /hello/;
re = /hello/i; // i = case insensitive
//re = /hello/g; // Global search look for the entire string not just first match

newSubject('Flags','Flags que podem ser usadas');
console.log('i - Case Insensitive');
console.log('g - Globas Search procura na string toda não apenas na primeira ocorrência');

newSubject('Dados da RE','Imprime dados da RE');
console.log(re);
console.log(re.source);


newSubject('exec()','Retorna em um array ou nullo');
// exec() - Return result in an array or null
const resultExec = re.exec('hello world');
console.log(resultExec);
console.log(resultExec[0]);
console.log(resultExec.index);
console.log(resultExec.input); 

newSubject('test()','Retorna verdadeiro ou falso pode ser usado para testar a expressão regular');
// test() - Return true or false
// Used to test the regular expression
const resultTest = re.test('hello');
console.log(resultTest);


newSubject('match()','Retorna um array ou nullo, similar ao exec');
// match() - Return result array or null similar to exec 
// Create a string
const strMatch = 'Hello There';
// Test the string to regular expression instead of regular expression to sring
const resultMatch = strMatch.match(re);
console.log(resultMatch);


newSubject('search()','Retorna o index da primeira ocorrência, se não encontrado retorna -1');
// search() - Returns the index of tthe first match if not found returns -1
const strSearch = 'Jean Hello There';
const resultSearch = strSearch.search(re);
console.log(resultSearch);


newSubject('replace()','Retorna uma nova string com um ou todos os padrões localizados e substituidos.');
// replace() - Return a new string with some or all maches of a pattern
// will replace Hello by Hi
const strRep = 'Hello There';
const newStr = strRep.replace(re, 'Hi');
console.log(newStr);







//função para apresentar o título e descrição
function newSubject(title,description=''){
  console.log(`****************************************************`);
  console.log(title);
  console.log(description);
  console.log(`****************************************************`);
 
}
