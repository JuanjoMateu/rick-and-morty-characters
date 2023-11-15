const characterList = document.getElementById('character-list');
const paginaAdelante = document.getElementById('next-page');
const paginaAtras = document.getElementById('prev-page');

fetch('https://rickandmortyapi.com/api/character?page=4')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        const characters = data.results;
        characterList.innerHTML = createCharacterListHTML(characters);
    })
    .catch(error => {
        characterList.innerHTML = `Error al obtener personajes`;
    });

paginaAdelante.addEventListener('click', () => {
    fetch('https://rickandmortyapi.com/api/character?page=3')
     .then((response) => response.json())
     .then((data) => {
         // console.log('esto funciona');
         const characters2 = data.results;
         characterList.innerHTML = createCharacterListHTML(characters2);
     })
     .catch(error => {
         characterList.innerHTML = 'Error al obtener personajes';
         });
})

paginaAtras.addEventListener('click', () => {
    fetch('https://rickandmortyapi.com/api/character?page=1')
.then((response) => response.json())
.then((data) => {
     console.log(data);
    const characters3 = data.results;
    characterList.innerHTML = createCharacterListHTML(characters3);
})
.catch(error => {
    characterList.innerHTML = 'Error al obtener personajes';
    });
})
 function createCharacterListHTML(character) {
        let lista = "<ul>";
        character.forEach(character => {
            lista += `<li>
                        <img src="${character.image}" alt="${character.name}">
                        <p><strong style="font-weight: bold;">Name:</strong> ${character.name}</p>
                        <p><strong style="font-weight: bold;">Species:</strong> ${character.species}</p>
                    </li>`;
        });
        lista += "</ul>";
        return lista;
 }


// fetch('https://rickandmortyapi.com/api/episode')
//     .then((response) => {
//         if (!response.ok){
//             throw new Error ('Esto no esta bien');
//         }
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data)
//     })

// fetch('https://rickandmortyapi.com/api/location')
//     .then((response) => {
//         if (!response.ok){
//             throw new Error ('Esto no esta bien');
//         }
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data)
//     })