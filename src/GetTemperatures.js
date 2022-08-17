const getTemperatures = (forecast, weather) =>{
    let minToday;
    let tempMinToday = weather.main.temp_min;
    let maxToday;
    let tempMaxToday = weather.main.temp_max;

    let minTomorrow;
    let tempMinTomorrow = 100;
    let maxTomorrow;
    let tempMaxTomorrow = -100;

    let minAfterTomorrow;
    let tempMinAfterTomorrow = 100;
    let maxAfterTomorrow;
    let tempMaxAfterTomorrow = -100;

    //get today
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    const formattedToday = yyyy + "-" + ((mm < 10) ? "0" + mm : mm) + "-" + ((dd < 10) ? "0" + dd : dd);
    
    //get tomorrow & aftertomorrow
    let tomorrowYear = yyyy;
    let tomorrowMonth = mm;
    let tomorrowDay = dd + 1;
    let afterTomorrowYear = yyyy;
    let afterTomorrowMonth = mm;
    let afterTomorrowDay = dd + 2;

    if (mm === 12 && dd === 31){
        tomorrowYear += 1;
        tomorrowMonth = 1;
        tomorrowDay = 1;
        afterTomorrowYear += 1;
        afterTomorrowMonth = 1;
        afterTomorrowDay = 2;
    }

    if ((mm === 1 | mm === 3 | mm === 5 | mm === 7 | mm === 8 | mm === 10)  && (dd === 31)){
        tomorrowMonth += 1; 
        tomorrowDay = 1;
        afterTomorrowMonth += 1;
        afterTomorrowDay = 2;
    }

    if ((mm === 4 | mm === 6 | mm === 9 | mm === 11)  && (dd === 30)){
        tomorrowMonth += 1; 
        tomorrowDay = 1;
        afterTomorrowMonth += 1;
        afterTomorrowDay = 2;
    }

    if (mm === 2 && dd === 28){
        tomorrowMonth += 1; 
        tomorrowDay = 1;
        afterTomorrowMonth += 1;
        afterTomorrowDay = 2;
    }
    

    //formated tomorrow & aftertomorrow
    if (tomorrowDay < 10) tomorrowDay = '0' + tomorrowDay;
    if (tomorrowMonth < 10) tomorrowMonth = '0' + tomorrowMonth;

    const formattedTomorrow = tomorrowYear + "-" + tomorrowMonth + "-" + tomorrowDay;

    if (afterTomorrowDay < 10) afterTomorrowDay = '0' + afterTomorrowDay;
    if (afterTomorrowMonth < 10) afterTomorrowMonth = '0' + afterTomorrowMonth;

    const formattedAfterTomorrow = afterTomorrowYear + "-" + afterTomorrowMonth + "-" + afterTomorrowDay;
    
        console.log("today: ",formattedToday)
        console.log("tomorrow: ",formattedTomorrow)
        console.log("aftertomorrow: ",formattedAfterTomorrow)
    

    //get temps min & max of today, tomorrow & aftertomorrow
    const temps = forecast.list.map(day => {

        if (day.dt_txt.slice(0, 10) === formattedToday){
            minToday = day.main.temp_min;
            if (minToday < tempMinToday){
                tempMinToday = minToday;
            }
            maxToday = day.main.temp_max;
            if (maxToday > tempMaxToday){
                tempMaxToday = maxToday;
            }
            
        }
        
        if (day.dt_txt.slice(0, 10) === formattedTomorrow){
            minTomorrow = day.main.temp_min;
            if (minTomorrow < tempMinTomorrow){
                tempMinTomorrow = minTomorrow;
            }
            maxTomorrow = day.main.temp_max;
            if (maxTomorrow > tempMaxTomorrow){
                tempMaxTomorrow = maxTomorrow;
            }
        
        }

        if (day.dt_txt.slice(0, 10) === formattedAfterTomorrow){
            minAfterTomorrow = day.main.temp_min;
            if (minAfterTomorrow < tempMinAfterTomorrow){
                tempMinAfterTomorrow = minAfterTomorrow;
            }
            maxAfterTomorrow = day.main.temp_max;
            if (maxAfterTomorrow > tempMaxAfterTomorrow){
                tempMaxAfterTomorrow = maxAfterTomorrow;
            }
        }
        
        let info =  [tempMinToday, tempMaxToday, tempMinTomorrow, tempMaxTomorrow, tempMinAfterTomorrow, tempMaxAfterTomorrow]

        return info;
    });

    //toda la data necesaria 
    let data = {
        dates: [tomorrowDay,tomorrowMonth,afterTomorrowDay,afterTomorrowMonth,dd,mm],
        temps: temps
        }

    return data
}
export default getTemperatures;



