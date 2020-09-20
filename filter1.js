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

/*Cria-se uma nova instância, a função arrow vai verificar cada elemento do array e exibirá a condição se true*/
const newPets = pets.filter((pet) => {
    return pet.age < 5;
})

console.log(pets);
console.log(newPets);