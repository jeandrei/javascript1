/**
 * 
 * Create a function getData with a parameter endpoint
 * in the function create a const xhr with a new XMLHttpRequest
 * then xhr open method get the endpoint
 * xhr onreadystatechange = function and in the function check if the readyState is iqual to 4 and the status is iqual to 200
 * if so just console log JSON.parse(this.responseText)
 * 
 * now create a setTimeout
 * xhr send
 * with a random interval with the formula Math.flor math random * 3000) + 1000
 * 
 * Now call 
 * getData(/movies.json)
 * getData(/actors.json)
 * getData (/directors.json)
 * 
 * As result check tha the order of execution does not follow the sequence becouse of differents random timer
 * 
 * To solve this we need to pass a callback
 * In the getData function add another parameter cb (callback)
 * 
 * in the line where we just console log JSON.parse(this.responseText) lets call the callback
 * cb(JSON.parse(this.responseText));
 * 
 * now call the getData with the callback like this
 * getData('/movies.json', (data) => {
 *    console.log(data);
 * })
 * 
 * and so we can nest other callback to get the next set of data like
 *  getData('/movies.json', (data) => {
 *    console.log(data);
 *    getData('/actors.json', (data) => {
 *      console.log(data);
 *      getData('/directors.json', (data) => {
 *        console.log(data);
 *      });
 *    });
 * })
 * 

 */


