function compareTime(timeString1,timeString2){
    
    let dataTime1 = new Date(timeString1);
    let dataTime2 = new Date(timeString2);
    return dataTime1.getTime() > dataTime2.getDate();
}


module.exports = {
    compareTime
}