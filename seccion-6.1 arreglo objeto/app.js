
let persona1 = {

       nombre:'edgard',
       edad:29
};

let persona2 = {

       nombre:'gisele',
       edad:25
};

let persona3 = {

       nombre:'Celia',
       edad:50
};

let personas = [persona1, persona2, persona3];

for (let i=0; i < personas.length; i++)
{
       let persona = personas[i];
       console.log(`${persona.nombre} -- ${persona.edad}`);
}