let day = prompt('Введите число от 1 до 31');
day = Number(day);
switch(true){
    case day>0 && day<11:
        document.write('это первая декада месяца');
        break;
    
    case day>10 && day<21:
        document.write('это вторая декада месяца');
        break;

    case day>20 && day<31:
        document.write('это третья декада месяца');
        break;
}
