
function filtrarPorLetra (arr,letra){

    let nuevoArr = [];

    for(let i = 0; i <arr.length; i++){

        let nombre = arr[i];

        if(nombre[0]=== letra){
            nuevoArr.push(nombre);
        }
    }

    return nuevoArr;
}

//CaSeNsItIvE 


let heroes = ['doom', 'Dr. Strange', 'hulk', 'She hulk', 'Spiderman', 'captain marvel'];

let heroesCon = filtrarPorLetra(heroes,'S');

console.log(heroesCon); // she hulk, Spiderman
