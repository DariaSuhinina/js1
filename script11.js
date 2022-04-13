let a = prompt('Введите переменную равную 0 или 2, другие поделятся на 10','');
a=Number(a);
if(a==0 || a==2){
    a += 7;
} else {
    a /= 10;
}
document.write(a);
