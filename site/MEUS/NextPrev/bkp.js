const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'William Johnson',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  }
];

// carrega a função firstload para carregar o primeiro registro
document.addEventListener('DOMContentLoaded',firstLoad);

document.getElementById('next').addEventListener('click', nextProfile);

document.getElementById('previous').addEventListener('click', prevProfile);

const profiles = profileIterate(data);


function firstLoad(){
  const currentProfile = profiles.first();//tirei o .value para visualizar no terminal
  console.log(currentProfile);
}

function nextProfile(){
  const currentProfile = profiles.next();
  console.log(currentProfile);
}


function prevProfile(){
  const currentProfile = profiles.prev();
  console.log(currentProfile);
}


function profileIterate(profiles){
  profileIndex = 0;

  return {
    first: function(){
      profileIndex = 0; 
      console.log(profileIndex);
      return { value: profiles[profileIndex], info: 'Carrego o index zero pois se der um next direto já vai para o indice 1' };
    },
    next: function(){
      profileIndex++; 
      console.log(profileIndex);     
      return profileIndex < profiles.length ?
      { value: profiles[profileIndex]} :
      { done: true , info: 'Quando o done é true quer dizer que chegou no fim do array'}
    },
    prev: function(){
      profileIndex--;   
      console.log(profileIndex);   
      return profileIndex >= 0 ?
      { value: profiles[profileIndex], done: false } :
      { done: true , info: 'Quando o done é true quer dizer que chegou no fim do array'}
    }
  }
}