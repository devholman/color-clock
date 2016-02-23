

var clock_El = document.querySelector(".clock-digits")
var hex_El = document.querySelector(".hex-digits")
var colorBackground_El = document.querySelector(".color-box")
var myBar_El = document.querySelector(".prog_bar")


// clock

var writeTime = function(){
	var dateObj = new Date()
	var second = dateObj.getSeconds()
	var minute = dateObj.getMinutes()
	var hour = dateObj.getHours()

	realTime = hour + ":" + minute + ":" + second
	clock_El.innerHTML = realTime



	var newWidthPercentage = second / 60 * 100 + "%"
	myBar_El.style.width = newWidthPercentage
}

var TickingTimer = setInterval(function(){

	writeTime()


},1000);




// hex colors

colorBackground_El.style.background = "radial-gradient(circle,white,rgba(44, 62, 80,.5))"
var hexData = "#2c3e50"
var hexSplit = hexData.split('')
hex_El.innerHTML = hexSplit[1]+hexSplit[2]+":"+hexSplit[3]+hexSplit[4]+":"+hexSplit[5]+hexSplit[6]









// UPDATE REPO



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