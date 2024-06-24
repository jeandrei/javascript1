/**
 * Using arrow function sintax create a const async getUsers and with try catch method
 * const response = fetch for the url https://jsonplaceholder.typicode.com/users
 * check if !response.ok then throw error Request Failed
 * If no error const data = response.json()
 * console log data
 * In catch just console error
 * Now change the url to http://httpstat.us/500 to force an error and see the result
 * But then change the response.json() to response.text()
 * 
 * Now create a async const getPosts  using arrow function fetch the url https://jsonplaceholder.typicode.com/posts
 * as above check if !response.ok throw error Request Failed but this time do not use try catch method
 * and at the end simpli console data
 * 
 * Now call the function getPosts() and handle the error by doing getPosts().catch((error) => console.log(error))
 * Change the url to http://httpstat.us/500 and the response.json() to response.text()
 * Work the same way as getUsers.
 * The best way is use the try catch inside the function as the getUsers example
 */
