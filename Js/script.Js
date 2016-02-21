
var clock_El = document.querySelector(".clock-digits")
var hex_El = document.querySelector(".hex-digits")
var colorBackground_El = document.querySelector(".color-box")


// clock
var dateObj = new Date()
var digits = dateObj.toTimeString()


timeSplit = digits.split(" ")
realTime = timeSplit[0]
clock_El.innerHTML = realTime


// hex colors
colorBackground_El.style.background = "radial-gradient(circle,white,#2c3e50)"
var hexData = "#2c3e50"
var hexSplit = hexData.split('')
hex_El.innerHTML = hexSplit[1]+hexSplit[2]+":"+hexSplit[3]+hexSplit[4]+":"+hexSplit[5]+hexSplit[6]



// var hex_El_showing = true


// var hexShow = function(){
	
// 	if (hex_El_Showing === true){
// 		hex_El_Showing.style.display = 'none';
// 		clock_El.style.display = 'inline-block';
// 		hex_El_Showing = false
// 	}else{
// 		hex_El_Showing.style.display = 'inline-block';
// 		clock_El.style.display = 'none';
// 		hex_El_Showing = true
// 	}
	
// }


// var currentTimeInfo = {
// 	dateData : {
// 		year: 2016,
// 		month: 2,
// 		dayOfMonth: 19,
// 		dayOfWeek: 5,
// 		hourOfDay: 11,
// 		minuteOfHour: 30,
// 		secondsOfMinute: 6
// 	}

// 	getFullYear: function(){
// 		return this.dateData.year
// 	},

// 	setFullYear: function(yr){
// 		this.dateData.year = yr

// 		return this.dateData.year
// 	}

// }

// BAD!!
// currentTimeInfo.year

// GOOD~
// currentTimeInfo.getFullYear()

// currentTimeInfo.setFullYear(2013)
// var threeYearsAgoFromNow = currentTimeInfo