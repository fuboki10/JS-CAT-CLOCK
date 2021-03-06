var wakeUpTime = 7;
var noon = 12;
var lunchTime = 12;
var napTime = lunchTime + 2;
var partyTime;
var evening = 18;

var lunchTimeSelector =  document.getElementById("lunchTimeSelector");
var napTimeSelector =  document.getElementById("napTimeSelector");
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
var partyButton = document.getElementById("partyTimeButton");

var partyAudio = new Audio('voices/Cat-meow-audio-clip.mp3');

var showCurrnetTime = function()
{
	var clock = document.getElementById('clock');
	var CurrTime = new Date();

	var h = CurrTime.getHours();
	var m = CurrTime.getMinutes();
	var s = CurrTime.getSeconds();
	var meridian = "AM";
	
	if (h >= noon)
	{
		meridian = "PM";
		h = h - 12;
	}

	if (m < 10) 
	{
		m = "0" + m;
	}

	if (s < 10)
	{
		s = "0" + s;
	}

	var clockTime = h + ":" + m + ":" + s + " " + meridian + "!!!";

	clock.innerText = clockTime;
};

var updateClock = function()
{
	var time = new Date().getHours();
	var message;
	var img = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
	var timeEventJS = document.getElementById('timeEvent');
	var lolCatImageJS = document.getElementById('lolcatImage');
  

  if (time == partyTime)
  {
    img = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    message = "Let's party!";
  }
  else if (time == wakeUpTime)
  {
    img = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    message = "Wake up!";
  }
  else if (time >= lunchTime)
  {
    img = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    message = "Let's have some lunch!";
  }
  else if (time >= napTime)
  {
    img = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    message = "Sleep tight!";
  }
  else if (time < noon)
  {
    img = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
    message = "Good morning!";
  }
  else if (time >= evening)
  {
    img = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
    message = "Good evening!";
  }
  else
  {
    img = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    message = "Good afternoon!";
  }

  timeEventJS.innerText = message;
  lolCatImageJS.src = img;

  showCurrnetTime();
};

updateClock();

var oneSecond = 100;
setInterval( updateClock, oneSecond);

var partyEvent = function()
{
	 if (partyTime < 0) 
    {
        partyTime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
        partyAudio.play();
    }
    else
    {
        partyTime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#3039";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent();

var wakeUpEvent = function()
{
    wakeUpTime = wakeUpTimeSelector.value;
    lunchTime = lunchTimeSelector.value;
    napTime = napTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

var lunchEvent = function()
{
	  wakeUpTime = wakeUpTimeSelector.value;
    lunchTime = lunchTimeSelector.value;
    napTime = napTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);

var napEvent = function()
{
    wakeUpTime = wakeUpTimeSelector.value;
    lunchTime = lunchTimeSelector.value;
    napTime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);


