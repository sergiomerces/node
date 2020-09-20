const pets = [
    {
        type: 'dog', 
        name: 'bolinha',
        age: 15,
        weight: 30
    },

    {
        type: 'cat',
        name: 'mingau',
        age: 6,
        weight: 2
    },

    {
        type: 'dog',
        name: 'rex',
        age: 4,
        weight: 5
    },

    {
        type: 'cat',
        name: 'marrom',
        age: 2,
        weight: 1
    },

    {
        type: 'fish',
        name: 'gulp',
        age: 1,
        weight: 0.1
    },

    {
        type: 'horse',
        name: 'pe de pano',
        age: 1,
        weight: 80
    }
]

const totalWeight = pets.reduce((total, pet) => {
    return total + pet.weight;
}, 0)

console.log(totalWeight);