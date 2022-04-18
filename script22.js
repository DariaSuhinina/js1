let days = prompt('Введите количество дней');
const HOUR = 24;
const MINUTS = 60;
const SEC = 60;
let secInDays = days * HOUR * MINUTS * SEC;
document.write(secInDays);
