function showPosition(position) {
    console.log(`Latitude: ${position.coords.latitude} Longitude: ${position.coords.longitude}`);
}

if (navigator.geolocation){
    console.log("has location!");
    console.log(navigator.geolocation.getCurrentPosition((position)=>console.log(`Latitude: ${position.coords.latitude} Longitude: ${position.coords.longitude}`)));

}