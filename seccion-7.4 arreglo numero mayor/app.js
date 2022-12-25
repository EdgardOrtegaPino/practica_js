

let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5];
let max = 0;
for(i=0;i<numeros.length;i++){
    if(numeros[i]>max){
        max = numeros[i]
    }
}

console.log('el numero mayor es: ' + max);