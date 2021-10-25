
 
// function getLocation(){
//     var x = document.getElementById('display');
//     if(navigator.geolocation){
       
        ///navigator.geolocation.getCurrentPosition(success)
//     }else{
//         x.innerText="Geo Not Supported"
//     }
// }
function success(d){
    var x = document.getElementById('display');
    var latitude = d.coords.latitude;
    var longitude = d.coords.longitude;
    x.innerText=`Latitude ise ${latitude} and longitude ise ${longitude}`
}