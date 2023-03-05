const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
let temp;
let cityname;
let status;
let imgid;
let desc,sunrise,sunset,windspeed,humidity,feellike,pressure,maxtemp,mintemp;
let temp1,temp2,temp3,temp4,temp5,temp6,temp7,temp8,temp9,temp10;
let imgid1,imgid2,imgid3,imgid4,imgid5,imgid6,imgid7,imgid8,imgid9,imgid10;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function (req, res) {
  var currentdate=new Date();
  var hours=currentdate.getHours();
  var min=currentdate.getMinutes();
  var sec=currentdate.getSeconds();
  var month=currentdate.getMonth();
  const month4 = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var month1=month4[month];
  var day=currentdate.getDay();
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var day1 = weekday[day];
var Date1=currentdate.getDate();
  sec=sec+00;
  hours=hours;
  const imgurl="http://openweathermap.org/img/wn/"+imgid+"@2x.png";
  const imgurl1="http://openweathermap.org/img/wn/"+imgid+"@2x.png";
  const imgurl2="http://openweathermap.org/img/wn/"+imgid+"@2x.png";
  const imgurl3="http://openweathermap.org/img/wn/"+imgid+"@2x.png";
  const imgurl4="http://openweathermap.org/img/wn/"+imgid+"@2x.png";
  const imgurl5="http://openweathermap.org/img/wn/"+imgid+"@2x.png";
  const imgurl6="http://openweathermap.org/img/wn/"+imgid+"@2x.png";
  const imgurl7="http://openweathermap.org/img/wn/"+imgid+"@2x.png";
  const imgurl8="http://openweathermap.org/img/wn/"+imgid+"@2x.png";
  const imgurl9="http://openweathermap.org/img/wn/"+imgid+"@2x.png";
  const imgurl10="http://openweathermap.org/img/wn/"+imgid+"@2x.png";
  

  
  res.render("index", { temperature: temp, cityname: cityname ,hour:hours,min:min,sec:sec,img:imgurl,
  desc:desc,sunset:sunrise,sunrise:sunrise,windspeed:windspeed,humidity:humidity,feellike:feellike,
pressure:pressure,day:day1,month:month1,date:Date1,maxtemp:maxtemp,mintemp:mintemp,
temp1:temp1,temp2:temp2,temp3:temp3,temp4:temp4,temp5:temp5,temp6:temp6,temp7:temp7,temp8:temp8,temp9:temp9,temp10:temp10,
imgid1:imgurl1,imgid2:imgurl2,imgid3:imgurl3,imgid4:imgurl4,imgid5:imgurl5,imgid6:imgurl6,imgid7:imgurl7,imgid8:imgurl8,imgid9:imgurl9,imgid10:imgurl10,});
});
app.get("/error", function (req, res) {
  res.render("404", {});
});

app.post("/", function (req, res) {
  const city = req.body.city;
  console.log(city);
  //https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=4a2b32c0632531120230897d707eac21
  const url =
    "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=c409b9ae9c8dd8ba7ae949ee7070af34&units=metric";
  https.get(url, function (response) {
    console.log(response.statusCode);
    if (response.statusCode == 404) {
      res.redirect("/error");
    } 
    else 
    {
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      status = weatherData.cod;
      temp = weatherData.list[0].main.temp;
      cityname = weatherData.city.name;
      imgid=weatherData.list[0].weather[0].icon;
      desc=weatherData.list[0].weather[0].description;
      sunrise=weatherData.city.sunrise;
      sunset=weatherData.city.sunset;
      windspeed=weatherData.list[0].wind.speed;
      humidity=weatherData.list[0].main.humidity;
      feellike=weatherData.list[0].main.feels_like;
      pressure=weatherData.list[0].main.pressure;
      maxtemp=weatherData.list[0].main.temp_max;
      mintemp=weatherData.list[0].main.temp_min;
      temp1=weatherData.list[1].main.temp;
      temp2=weatherData.list[2].main.temp;
      temp3=weatherData.list[3].main.temp;
      temp4=weatherData.list[4].main.temp;
      temp5=weatherData.list[5].main.temp;
      temp6=weatherData.list[6].main.temp;
      temp7=weatherData.list[7].main.temp;
      temp8=weatherData.list[8].main.temp;
      temp9=weatherData.list[9].main.temp;
      temp10=weatherData.list[10].main.temp;
      imgid1=weatherData.list[1].weather[0].icon;
      imgid2=weatherData.list[2].weather[0].icon;
      imgid3=weatherData.list[3].weather[0].icon;
      imgid4=weatherData.list[4].weather[0].icon;
      imgid5=weatherData.list[5].weather[0].icon;
      imgid6=weatherData.list[6].weather[0].icon;
      imgid7=weatherData.list[7].weather[0].icon;
      imgid8=weatherData.list[8].weather[0].icon;
      imgid9=weatherData.list[9].weather[0].icon;
      imgid10=weatherData.list[10].weather[0].icon;


      console.log(imgid);
    });
      res.redirect("/");
    }
  });
});
app.listen(3000, function () {
  console.log("server is running on port 3000");
});
