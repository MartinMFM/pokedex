let modal = document.querySelector(".modal-content");
const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let pokType = data.types[0].type.name;
            let card = document.getElementById("pokeCard");
            card.style.display = "block";
            modal.insertAdjacentHTML("beforeend",`<br><span class="stats">Estadisticas: </span>`);
            let pokStats = data.stats.forEach(element => {
                console.log(element.stat.name);
                
                let html = ` <span id="stats">${element.stat.name}</span>`
                modal.insertAdjacentHTML('beforeend', html);
            });
            modal.insertAdjacentHTML("beforeend", `<br><span class="moves">Movimientos: </span>`);
            let pokMoves = data.moves.forEach(e => {
                console.log(e.move.name);
                
                let html2 = ` <span id="moves">${e.move.name}</span>`
                modal.insertAdjacentHTML('beforeend', html2);
            })

            console.log(pokType);
            pokeType(pokType);
            pokeImage(pokeImg);
            pokeName = pokeName.toUpperCase();
            pokeTitle(pokeName);
        }
    });
}

fetchPokemon();

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeIMG");
    const pokePhoto2 = document.getElementById("pokeIMG2");
    pokePhoto.src = url;
    pokePhoto2.src = url;
}



const pokeTitle = (name) => {
    const namePokemon = document.getElementById("pokeTitle");
    const namePokemon2 = document.getElementById("pokeTitle2");
    namePokemon.innerText = name;
    namePokemon2.innerText = name;
}



const pokeType = (type) => {
    const typePokemon = document.getElementById("pokeCard");
    const fondo = document.querySelector(".modal-content");
    let typepok = document.getElementById("type");
    typepok.innerText = type.toUpperCase();
    if(type == 'electric'){
        typePokemon.style.backgroundColor = "#F7D02C";
        fondo.style.backgroundColor = "#F7D02C";
    }
    else if(type == 'normal'){
        typePokemon.style.backgroundColor = "#A8A77A";
        fondo.style.backgroundColor = "#A8A77A";
    }
    else if(type == 'fire'){
        typePokemon.style.backgroundColor = "#EE8130";
        fondo.style.backgroundColor = "#EE8130";
    }
    else if(type == 'water'){
        typePokemon.style.backgroundColor = "#6390F0";
        fondo.style.backgroundColor = "#6390F0";
    }
    else if(type == 'grass'){
        typePokemon.style.backgroundColor = "#7AC74C";
        fondo.style.backgroundColor = "#7AC74C";
    }
    else if(type == 'ice'){
        typePokemon.style.backgroundColor = "#96D9D6";
        fondo.style.backgroundColor = "#96D9D6";
    }
    else if(type == 'fighting'){
        typePokemon.style.backgroundColor = "#C22E28";
        fondo.style.backgroundColor = "#C22E28";
    }
    else if(type == 'poison'){
        typePokemon.style.backgroundColor = "#A33EA1";
        fondo.style.backgroundColor = "#A33EA1";
    }
    else if(type == 'ground'){
        typePokemon.style.backgroundColor = "#E2BF65";
        fondo.style.backgroundColor = "#E2BF65";
    }
    else if(type == 'flying'){
        typePokemon.style.backgroundColor = "#A98FF3";
        fondo.style.backgroundColor = "#A98FF3";
    }
    else if(type == 'psychic'){
        typePokemon.style.backgroundColor = "#F95587";
        fondo.style.backgroundColor = "#F95587";
    }
    else if(type == 'bug'){
        typePokemon.style.backgroundColor = "#A6B91A";
        fondo.style.backgroundColor = "#A6B91A";
    }
    else if(type == 'rock'){
        typePokemon.style.backgroundColor = "#B6A136";
        fondo.style.backgroundColor = "#B6A136";
    }
    else if(type == 'ghost'){
        typePokemon.style.backgroundColor = "#735797";
        fondo.style.backgroundColor = "#735797";
    }
    else if(type == 'dragon'){
        typePokemon.style.backgroundColor = "#6F35FC";
        fondo.style.backgroundColor = "#6F35FC";
    }
    else if(type == 'dark'){
        typePokemon.style.backgroundColor = "#705746";
        fondo.style.backgroundColor = "#705746";
    }
    else if(type == 'steel'){
        typePokemon.style.backgroundColor = "#B7B7CE";
        fondo.style.backgroundColor = "#B7B7CE";
    }
    else if(type == 'fairy'){
        typePokemon.style.backgroundColor = "#D685AD";
        fondo.style.backgroundColor = "#D685AD";
    }

}

let card = document.getElementById("pokeCard");
card.addEventListener('click', function(e){
    e.preventDefault();
    
    let modal = document.getElementById("myModal");
    modal.style.display = "grid";
});

let btnCerrar = document.getElementById("cerrar");
btnCerrar.onclick = function() {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
}