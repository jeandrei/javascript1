//First create a const poll instantiate a new map

/**
 * Set to the poll map the values
 * 'React', 0
 * 'Vue', 0
 * 'Angular', 0
 * 'Svelte', 0
 * 'Other', 0 
 */


/**
 * Create a function submitForm prevent the default behavior
 * For now just console log 'submit'
 * Then get the element byId poll-form add an eventlistener submit 
 * and call the function submitForm
 * see if you get submit in the console
 * Now delete de console log
 * create a const selectedOption and query select
 * the input name poll-option checked
 * console log the selectedOption to see if it was selected properly
 * check if !selectedOption then alert Please select an Option and return
 * now with the selectedOption we can get the element in the map
 * like poll.get(selectedOption.value) and then set the new value
 * poll.set(selectedOption, new value)
 * to do so lets first create a 
 * const voteCount and set it to the poll.get(selectedOption.value) 
 * then lets set it
 * poll.set(selectedOption.value, voteCount + 1)
 * Now let's create a function displayResults()
 * first create a const results and set it to the element id results
 * clear the results with innerHtml = ''
 * now let's do a for [option, votes] of pull
 * console log option and votes to see what you get
 * call displayResults at the end of the submitForm
 * now create a const optionElement and set it to a new element div
 * add the above classes to the element
 * 'border-bottom', 'p-2', 'd-flex', 'justify-content-between'
 * then in the optionElement innerHtml the code
 * `<strong>${option}: </strong> ${votes} votes`;
 * then appendchild the optionElement to the results
 * finaly let's disable the form after submit
 * in the submitForm after de displayResults 
 * select by id the element poll-form
 * then querySelectorAll input, button
 * and forach el stands for element setAttribute disabled true
 * 
 *  
 * 
 */
