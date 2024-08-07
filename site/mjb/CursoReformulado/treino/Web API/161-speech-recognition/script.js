const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = 'en-US';

//true to keep listening and false if you want to stop listening after say
rec.continuous = true;

// result will be in SpeechRecognitionResultList object zero object zero again Transcript
rec.onresult = function(e) {
  //console.log(e.results);

  const acceptedColors = [
    'red',
    'blue',
    'green',
    'yellow',
    'pink',
    'brown',
    'purple',
    'orange',
    'black',
    'white',
  ];

  for(let i = e.resultIndex; i < e.results.length; i++){
    const script = e.results[i][0].transcript.toLowerCase().trim();
    
    if(acceptedColors.includes(script)) {
      document.body.style.backgroundColor = script;
    } else {
      alert('Please say a color');
    }
  }  
}

//start listening
rec.start();
