//the dom content loaded
document.addEventListener('DOMContentLoaded',()=>{
    let latituted=document.getElementById("latituted");
    let longituted=document.getElementById('longituted');
    let City=document.getElementById('city');
    let btnget=document.getElementById('btngetWeather');
   // btnget.onclick(btn)
    

    const getGeoData=()=>{
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition((postion)=>{
            latituted.value=postion.coords.latitude;
            longituted.value=postion.coords.longitude;
            //let timeStampFromGeolocation=postion.coords.timeStamp

        })
    }else{
        window.alert("Sorry your browser does not support Geolocation API")
    }
    }
    let date=new Date()
    console.log(date.getTime)
 getGeoData();
 //the data fecth function but their is no api 
 const getWeatherData=async()=>{
    const response= await fetch();
    const jsonData= await response.json()
    console.log(jsonData)
 }
 getWeatherData()
})