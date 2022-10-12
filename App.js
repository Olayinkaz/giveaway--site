const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];
const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

const fDate = new Date(2022,09,16,22,30,0);
const year = fDate.getFullYear()
const hours = fDate.getHours()
const minutes = fDate.getMinutes()
let month =months[fDate.getMonth()]
const date = fDate.getDate()
let weekday = weekdays[fDate.getDay()]




giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}pm`;

//future tyime in ms
const fTime = fDate.getTime()

 function getRemaindingTime() {
     const today = new Date().getTime()
     const t = fTime-today
     // 1s = 1000ms
    //1m = 60s
    //1hr = 60min
    //1d = 24hr

    //values in ms
    const oneDay= 24*60*60*1000
    const oneHour = 60*60*1000
    const oneMinute = 60*1000
    //calculate all values
    let days = Math.floor(t/oneDay)
    let hours = Math.floor((t % oneDay) / oneHour)
    let minutes = Math.floor((t % oneHour) / oneMinute)
    let seconds = Math.floor((t % oneMinute) / 1000)

    const values = [days, hours, minutes, seconds]

    function format(item) {
        if (item < 10) {
            return(item = `0${item}`)
        }
        return item
    }
     items.forEach(function(item, index) {
         item.innerHTML = format(values[index])
     })
     
     if(t < 0) {
         clearInterval(countdown)
         deadline.innerHTML = `<h4 class ="expired">sorry, this giveaway has expired</h4>`
     }
 }
 let countdown = setInterval(getRemaindingTime, 1000);
 //set initial values
 getRemaindingTime(); 

