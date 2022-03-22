const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName")
    let pokeInput = pokeName.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status == "404"){
            console.log(res);
            pokeImage("img/pikadurmiendo.png");
        }else{
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.other["official-artwork"].front_default;
        let pokeT = data.types[0].type.name;
        let pokeS = data.stats;
        let pokeM = data.moves[0].move.name;
        console.log(pokeS);
        pokeImage(pokeImg);
        pokeType(pokeT);
        pokeStats(pokeS);
        pokeMovs(pokeM);
    })
}

const pokeImage = (url) =>{
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

const pokeType = (url) =>{
    const pokeT = document.getElementById("tpokemon");
    pokeT.textContent = url;
}

const pokeStats = (url) =>{
    const cont = 0;
    for (let i = 0; i < 6; i++) {
        const pokeS = document.getElementById("sp" + i);
        const pokeS1 = document.getElementById("s" + i);
        pokeS.value = url[i].base_stat;
        console.log(url[i].base_stat);
        pokeS1.textContent = url[i].base_stat;
    }
}

const pokeMovs = (url) =>{
    const pokeM = document.getElementById("movs");
    pokeM.textContent = url;
}