let month = prompt('какой сейчас месяц по счету?');
switch(true){
    case +month>0 && +month<3 || +month===12 :
        document.write('Сейчас зима');
        break;

    case +month>2 && +month<6 :
        document.write('Сейчас весна');
        break;

    case +month>5 && +month<9 :
        document.write('Сейчас лето');
        break;

    case +month>8 && +month<12 :
        document.write('Сейчас осень');
        break;
}
