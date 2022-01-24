let req=new XMLHttpRequest();// allows to make http req in js
function fun()
{
    let dat = document.getElementById("mycity").value;
    //open a connection
    let link = 'https://api.openweathermap.org/data/2.5/weather?q=' + dat + '&appid=93f26e3c57081a6210de53b8dcfdfea4'
    req.open('GET', link, true);
    req.onload=function()
    {
      if(req.status>=200 && req.status<400)
      {
        console.log("success!!");
        let data=JSON.parse(req.responseText);
        let imgsrc='https://openweathermap.org/img/w/'+data.weather[0].icon+'.png';
        document.getElementById('myp').innerHTML=data.main.temp + 'F';
        document.getElementById('hum').innerHTML = data.main.humidity;
        document.getElementById('tmax').innerHTML = data.main.temp_max + 'F';
        document.getElementById('tmin').innerHTML = data.main.temp_min + 'F';
        document.getElementById("wall.jpeg").src = imgsrc;
        document.getElementById('con').innerHTML = data.sys.country;
        document.getElementById('pre').innerHTML = data.main.pressure;
        console.log(data);
      }
      else 
      {
            console.log(" could not connect to server");
      }
   }
   req.onerror = function() 
   {
    console.log("error!!")
   }
   req.send();
}