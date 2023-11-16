const characterList = document.getElementById('character-list');
const nextPage = document.getElementById('next-page');
const previousPage = document.getElementById('prev-page');

let currentPage = 1;

function fetchPersonajes(page) {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            const characters = data.results;
            characterList.innerHTML = createCharacterListHTML(characters);
        })
        .catch(error => {
            characterList.innerHTML = `Error al obtener personajes`;
        });
}
nextPage.addEventListener('click', () => {
   currentPage++;
   fetchCharacters(currentPage);
   console.log('Este boton va hacia adelante')
});

previousPage.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        fetchCharacters(currentPage);
        console.log('Este botón va hacia atras')
    }
});

fetchPersonajes(currentPage);

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