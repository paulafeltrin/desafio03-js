console.log("1 - Criar um loop que conte de 1 até 10 usando FOR")
for(let cont = 1; cont <= 10; cont ++){
    console.log(`Loop com FOR ${cont}`);
}

console.log("2 - Criar um loop que conte de 10 até 1 usando WHILE")
let num = 10;

while(num >= 0){
    console.log(`Loop com WHILE ${num}`);
    num --;
}

console.log("3 - Criar um loop que conte todos os números ímpares de 1 até 100")
for(let num3 = 1; num3 <= 100; num3 ++){
    if(num3 % 2 !== 0){
        console.log(`Loop com FOR ${num3}`);
    }
}

let cont3 = 1;

while(cont3 <= 100){
    if(cont3 % 2!== 0){
        console.log(`Loop com WHILE ${cont3}`);
    }
    cont3 ++;
}

console.log("4- Criar um loop que conte todos os números pares de 0 a 100")
for(let num4 = 0; num4 <= 100; num4 ++){
    if(num4 % 2 === 0){
        console.log(`Loop com FOR ${num4}`);
    }
}

let cont4 = 0;

while(cont4 <= 100){
    if(cont4 % 2 === 0){
        console.log(`Loop com WHILE ${cont4}`);
    }
    cont4 ++;
}