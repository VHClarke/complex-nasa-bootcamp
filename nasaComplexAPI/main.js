//we need facility name
//its location
//the current weather at that location
//facility loaction API
  fetch("https://data.nasa.gov/resource/gvk9-iz74.json")
  .then(res => res.json())
  .then(response => {
    console.log(response)
    printFacilities(response)

    let ul = document.querySelector('ul')
    for(i = 0; i < response[2]; i++){
      let li = document.createElement("li")
      //latitude
      let lat = response[i].location.latitude
      let long = response[i].location.longitude
      console.log(getWeather(lat,long))

      //facility name
      li.appendChild(document.createTextNode((response[i].facility)))
      ul.appendChild(li)
      //city name
      li.appendChild(document.createTextNode((" " + response[i].city)))
      ul.appendChild(li)
      //state name
      li.appendChild(document.createTextNode(( " " + response[i].state)))
      ul.appendChild(li)

      .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
      })
      // getWeather(lat,long)

    };
  })

//Weather API
function getWeather(lat,long){
  // var proxy = 'https://cors-anywhere.herokuapp.com/'
  var api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=68be3e48ac168d3674e8c5afa21b1366`
  console.log("this is my url",api)
  fetch(api)
  .then(response =>{
    return response.json();
    console.log(response)
  })
  .then(data => {
    var text = document.createTextNode(data.currently.temperature)
    return text
  });
}
