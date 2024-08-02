//Seção 13 aula 149

// getCurrentPosition() pega a posição atual mas não atualiza
// getCurrentPosition() in the window object is on navigator/geolocation/prototype/getCurrentPosition
function curSuccess(pos){
  //pos will be the position
  const coords = pos.coords;
  console.log(`Latitude: ${coords.latitude}`);
  console.log(`Longitude: ${coords.longitude}`);
  console.log(`Within: ${coords.accuracy} meters`);
}

function curError(err){
  console.log(`Error:  ${err.code} - ${err.message}`);
}

const curOptions = {
  enableHightAccuracy: true, // Use GPS if available
  timeout: 5000, //Time in miliseconds to wait to stop trying for location
  maximumAge: 0, // Do not use a cached position
};

//have three parameters one function for sucess, other for error and options
//like getCurrentPosition(success, error, options)
navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);


// watchPosition atualiza a posição em tempo real
// watchPosition () in the window object is on navigator/geolocation/prototype/getCurrentPosition

const target = {
  latitude: 41.3874387,
  longitude: -71.394839
}


function watchSuccess(pos){
  //pos will be the position
  const coords = pos.coords;
  if(target.latitude === coords.latitude && target.longitude === coords.longitude){
    console.log('You have reached your destination!');
    navigator.geolocation.clearWatch(id);
  }
  console.log(`Latitude: ${coords.latitude}`);
  console.log(`Longitude: ${coords.longitude}`);
  console.log(`Within: ${coords.accuracy} meters`);
}

function watchError(err){
  console.log(`Error:  ${err.code} - ${err.message}`);
}

const watchOptions = {
  enableHightAccuracy: true, // Use GPS if available
  timeout: 5000, //Time in miliseconds to wait to stop trying for location
  maximumAge: 0, // Do not use a cached position
};

//have three parameters one function for sucess, other for error and options
//like getCurrentPosition(success, error, options)
const id = navigator.geolocation.watchPosition(watchSuccess, watchError, watchOptions);


