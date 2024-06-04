/**
 * Refector this code using promise.all
 * in the getData check if readyState === 4 if so check if status === 200 if so resolve else reject returning 'Something went wrong'
 * as promises create a 
 * const moviesPromise
 * const actorsPromise
 * const directorsPromise
 * After that just create a const dummyPromise as promise also and just return Hello World as resolve
 * Then use Promise.all and call all the promises
 * catch error and console log the error
 */
function getData(endpoint, cb) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', endpoint);

  xhr.onreadystatechange = function () {
    if ((this.readyState === 4) & (this.status === 200)) {
      cb(JSON.parse(this.responseText));
    }
  };

  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 3000) + 1000);
}

getData('./movies.json', (data) => {
  console.log(data);
  getData('./actors.json', (data) => {
    console.log(data);
    getData('./directors.json', (data) => {
      console.log(data);
    });
  });
});