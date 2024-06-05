/**
 * Create a function displayUser(user) and for now just console log user
 * Call the fetchUser at the end
 * Create a function fetchUser and fetch the url 'https://randomuser.me/api' be careful to retun the response as json
 * Then call the function displayUser(data.results[0]) to show just the first user returned
 * If the user is shown in the displayUser we can start working on the display of the data
 * first lets check if the user is a female if so set the backgroundColor to rebeccapurple else set to steelblue
 * create a const userDisplay and select the user id
 * then cut all the code inside the user id in the index.html
 * and then in userDisplay.innerHTML using backtick paste the code and change values like
 * Picture: user.picture.large
 * Name: user.name.first user.name.last
 * Email: user.email
 * Phone: user.phone
 * Location: user.location.city user.location.country
 * Age: user.dob.age
 * Create a addEventListener click to the id generate calling the function fetchUser
 * Create a function showSpinner and hideSpinner to show and hide the class spinner 
 * call show in the fetchUser before fetch and hide before displayUser
 * To load at the page loading call the fetchUser at the end also
 * 
 *
 * 
 */
