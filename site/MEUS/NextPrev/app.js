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
  const currentProfile = profiles.first().value;
  showProfile(currentProfile);   
}

function nextProfile(){
  const currentProfile = profiles.next().value;
  showProfile(currentProfile);
}


function prevProfile(){
  const currentProfile = profiles.prev().value;
  showProfile(currentProfile);  
}


function profileIterate(profiles){
  profileIndex = 0;

  return {
    first: function(){
      profileIndex = 0;      
      return { value: profiles[profileIndex] };
    },
    next: function(){
      profileIndex++;      
      return profileIndex < profiles.length ?
      { value: profiles[profileIndex]} :
      { done: true }
    },
    prev: function(){
      profileIndex--;      
      return profileIndex >= 0 ?
      { value: profiles[profileIndex], done: false } :
      { done: true }
    }
  }
}


function showProfile(currentProfile){
  if(currentProfile !== undefined){
    document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>   
        </ul>
    `;
    document.getElementById('imageDisplay').innerHTML = `
      <img src="${currentProfile.image}">
      `;
  } else {
    window.location.reload();
  } 
}