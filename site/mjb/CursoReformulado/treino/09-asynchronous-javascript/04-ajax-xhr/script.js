/**
 * Create a const xhr with new XMLHttpRequest
 * Sepcify method 'GET' and endpoint/URL ./movies.json with xhr.open
 * at the end of the document send the XMLHttpRequest xhr.send();
 * Now create a xhr onreadystatechange function and first just console log this.readyState * 
 * you'll see that there is 2,3,4 states
 * 
 * 0: request not initialized
 * 1: server connection established
 * 2: request received
 * 3: processing request
 * 4: request finished and response is ready
 * 
 * now before move one console log this.status and if everything is ok it must return code 200
 * 
 * the state we look for is 4 request finished an response is readyState and the status is 200
 * now check if this.readyState === 4 and this.status === 200
 * if so create a const data = JSON parse this.responseText
 * now data forEach repo 
 * create a const li with a createElement li
 * li innerHTML `<strong>${repo.title}</strong> - ${repo.year}`;
 * and add to the document.querySelector('#results") appendChild li
 *  
 */
  