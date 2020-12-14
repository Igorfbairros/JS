function getDayWeekText(dayWeek){
    let getDayWeekText;

    switch(dayWeek){
        case 0:
            getDayWeekText = 'Domindo';
            return getDayWeekText;
        case 1:
            getDayWeekText = 'Segunda';
            return getDayWeekText;
        case 2:
            getDayWeekText = 'Terça';
            return getDayWeekText;
        case 3:
            getDayWeekText = 'Quarta';
            return getDayWeekText;
        case 4:
            getDayWeekText = 'Quinta';
            return getDayWeekText;
        case 5:
            getDayWeekText = 'Sexta';
            return getDayWeekText;
        case 6:
            getDayWeekText = 'Sabado';
            return getDayWeekText;
        
    }
}
const day = new Date('1987-04-21 00:00:00');
const dayWeek = day.getDay();
const dayWeekText = getDayWeekText(dayWeek)

console.log(dayWeek, dayWeekText)