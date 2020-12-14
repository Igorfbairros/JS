const h1 = document.querySelector('.container h1');

const date = new Date();
h1.innerHTML = date.toString();

function getDayWeekText(dayWeek){
    let dayWeekText;

    switch(dayWeek){
        case 0:
            dayWeekText = 'Sunday ';
            return dayWeekText;
        case 1:
            dayWeekText = 'Monday';
            return dayWeekText;
        case 2:
            dayWeekText = 'Tuesday';
            return dayWeekText;
        case 3:
            dayWeekText = 'Wednesday';
            return dayWeekText;
        case 4:
            dayWeekText = 'Thursday';
            return dayWeekText;
        case 5:
            dayWeekText = 'Friday';
            return dayWeekText;
        case 6:
            dayWeekText = 'Saturday';
            return dayWeekText;
        
    }
}
function getNameMonth(numberMonth){
    let nameMonth;

    switch(numberMonth){
        case 0:
            nameMonth = 'January';
            return nameMonth;
        case 2:
            nameMonth = 'February';
            return nameMonth;
        case 3:
            nameMonth = 'April';
            return nameMonth;
        case 4:
            nameMonth = 'May';
            return nameMonth;
        case 5:
            nameMonth = 'June';
            return nameMonth;
        case 6:
            nameMonth = 'July';
            return nameMonth;
        case 7:
            nameMonth = 'August';
            return nameMonth;
        case 8:
            nameMonth = 'September';
            return nameMonth;
        case 9:
            nameMonth = 'October';
            return nameMonth;
        case 10:
            nameMonth = 'November';
            return nameMonth;
        case 11:
            nameMonth = 'December ';
            return nameMonth;
        
        
        
    }
}
function zeroLeft(num){
    return num >= 10 ? num :`0${num}`;
}

function createDate(date){
    const dayWeek = date.getDay();
    const numberMonth = date.getMonth();

    const nameDay = getDayWeekText(dayWeek);
    const nameMonth = getNameMonth(numberMonth);

    return (`${nameDay}, ${date.getDate()} de ${nameMonth}` +
     `de ${date.getFullTYear()}` +
    `${zeroLeft(date.getHours())} : ${zeroLeft(date.getMinutes())}`
    );

}
h1.innerHTML = createDate(date);