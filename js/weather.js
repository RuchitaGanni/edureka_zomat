navigator.geolocation.getCurrentPosition(success)


 function getLocation(){
//     var x = document.getElementById('display');
//     if(navigator.geolocation){
       
        // navigator.geolocation.getCurrentPosition(successloc)
//     }else{
//         x.innerText="Geo Not Supported"
//     }
 }
function success(d){
    var x = document.getElementById('display');
    var location =document.getElementById('loc');
    var temp_day =document.getElementById('temp_day');
    var temp_night =document.getElementById('temp_night');
    var latitude = d.coords.latitude;
    var longitude = d.coords.longitude;
    // x.innerText=`Longitude : ${longitude}
    // Latitude : ${latitude} `;
    // x.style.fontWeight="bold";


    var url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}8&lon=${longitude}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        location.innerText=`  ${data.city.name}`;
        location.style.fontWeight="bold";
        
        temp_day.innerText=data.list[0].temp.day;
        temp_night.innerText=data.list[0].temp.night;
    })

}


function successloc(){
    var x = document.getElementById('display');
    var location_name =document.getElementById('location_name').value;
    var loc =document.getElementById('loc')
    var temp_day =document.getElementById('temp_day');
    var temp_night =document.getElementById('temp_night');
   
    
    


    var url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${location_name}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    console.log(url);
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
       
        loc.innerText=`${data.city.name}`;
        loc.style.fontWeight="bold";
        temp_day.innerText=data.list[0].temp.day;
        temp_night.innerText=data.list[0].temp.night;
    //     x.innerText=`Longitude : ${data.city.coord.lon}
    //     Latitude : ${data.city.coord.lat} 
    //  `;
    })

}