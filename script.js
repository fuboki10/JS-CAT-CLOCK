var WakeUpTime = 7;
var noon = 12;
var lunchTime = 12;
var napTime = lunchTime + 2;
var partyTime;
var evening = 18;

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
}