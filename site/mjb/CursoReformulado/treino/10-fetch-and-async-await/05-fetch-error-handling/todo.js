/**
 * the site http://httpstat.us returns every type of html code
 * like http://httpstat.us/200 will return the code 200
 * you can check that in the network/all/headers tab in the browse console
 * 
 * First just feth the url http://httpstat.us/200 in the first .then return response and in the second console success
 * Now change the code to 404 Not Found and you'll see that the code still return success
 * Now try to put the .catch error and console error in the end to see if it fix the problem 
 * As expected it does not fix the problem
 * .catch runs with network error if you fetch an invalid url the .catch will works
 * now change the url to http://hello123.net you'll see that the .catch works after some seconds because the fatch will try to hit the url
 * Now returns the url to http://httpstat.us/404
 * and in the first .then console response.status, response.ok and response.statusText
 * now to handle the error check for the response.ok if !response.ok we know that some error happened
 * then throw new Error('Request Failed')
 * Now check if the response.status === 404 then throw error Not Found
 * Else if response.status === 500 then throw error Server Error
 * And finely if response.status !== 200 then throw error Request Failed
 * Now test with code 404, 500, 401 and 200
 * 
 * Now in the random-user-generator
 * At the first .then check if !res.ok then throw a error Request Failed else return res.json()
 * and at .catch hideSpinner and document.querySelector('#user').innerHTML = `
      <p class="text-xl text-center text-red-500 mb-5">
      ${error}</p>`;
 * 
 * 
 */
