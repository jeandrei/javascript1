const url =
  'https://script.google.com/macros/s/AKfycbx1Mf6IjDP1txZburnbxV3TCh-stEAchAykIP1Rs4J44yG2EmVh4Sg-h3TuoyHfFhM3Kg/exec'

getData = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    })
}

getData()
