let min = prompt('Сколько сейчас минут на часах?', '');
if (min <= 15){
    alert('Сейчас первая четверть часа');
} else if(min <= 30) {
    alert('Сейчас вторая четверть часа');
} else if(min <= 45) {
    alert('Сейчас третья четверть часа');
} else if(min <= 59) {
    alert('Сейчас четвертая четверть часа');
}
