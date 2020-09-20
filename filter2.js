const pets = [
    {
        name: 'rex',
        type: 'dog',
        age:    10
    },

    {
        name: 'miau',
        type: 'cat',
        age:    2
    },

    {
        name: 'gulp',
        type: 'fish',
        age:    1
    }
] 

/*Reescrevendo o código anterior passando usando a condição como função e passando o parâmetro age direto na função*/
const eMenorQueCinco = (numero) => {
    return numero < 5;
}

const newPets = pets.filter(({age}) => eMenorQueCinco(age));

console.log(pets);
console.log(newPets);