const dict = {
    "0":"SUNDAY",
    "1":"MONDAY",
    "2":"TUESDAY",
    "3":"WEDNESDAY",
    "4":"THURSDAY",
    "5":"FRIDAY",
    "6":"SATURDAY"
}

export function isOpened(openDates){
    var d = new Date();
    var toret=false
    openDates.forEach(date => {
        if(date.DayOfTheWeek===dict[d.getDay()]){
            const localtime = d.toLocaleTimeString();
            if(localtime>date.OpeningTime.split('.')[0] && localtime<date.CloseTime.split('.')[0]){
                toret=true
        }
        }
    })
   return toret
}