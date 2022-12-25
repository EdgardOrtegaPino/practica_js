
function maslargo(arr){

    let nombreLargo = '';

    for(let i = 0; i < arr.length;i++){

        let nombre = arr[i];

        if(nombre.length > nombreLargo.length){
            nombreLargo = nombre;
        }

    }

    return nombreLargo;
}




let heroes = ['deadpool','ciclipe','magneto','xavier'];

let heroeLargo = maslargo(heroes);

console.log(heroeLargo); //profesor charles xavier
