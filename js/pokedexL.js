const fetchPokemon = () => {
    pokeStts('c2');
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value;
    pokeInput = pokeInput.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status == "404"){
            console.log(res);
            pokeImage("img/pikadurmiendo.png");
            pokeStts('c3');
        }else{
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.other["official-artwork"].front_default;
        let pokeT = data.types;
        let pokeS = data.stats;
        let pokeM = data.moves[0].move.name;
        let pokeid = data.id;
        let pokenamel = document.getElementById("pokeNameL");
        pokeName.value = pokeid;
        pokenamel.textContent = data.name;
        console.log(pokeT);
        console.log(pokeS);
        pokeStts('c1');        
        pokeImage(pokeImg);
        pokeType(pokeT);
        pokeStats(pokeS);
        pokeMovs(pokeM);
    })
}

const pokeStts = (prueba) =>{
    let ps1 = document.getElementById('c1');
    let ps2 = document.getElementById('c2');
    let ps3 = document.getElementById('c3');
    const pokeStatus = document.getElementById(prueba);
    switch (prueba) {
        case 'c1':
            pokeStatus.style.background = '#04c015';
            ps2.style.background = '#6a6a6a';
            ps3.style.background = '#6a6a6a';
            break;
        case 'c2':
            pokeStatus.style.background = '#ce8b09';
            ps1.style.background = '#6a6a6a';
            ps3.style.background = '#6a6a6a';
            break;

        case 'c3':
            pokeStatus.style.background = '#ff3838';
            ps1.style.background = '#6a6a6a';
            ps2.style.background = '#6a6a6a';
            break;
    }
}

const pokeListu = () =>{
    const check = document.getElementById("pokeName");
    let pokeInput = pokeName.value;
    if (pokeInput == '' || pokeInput == 898 || pokeInput == 'NaN') {
        pokeName.value = 1;
    }else {
        pokeName.value++;   
    }
    fetchPokemon();
}

const pokeListd = () =>{
    const check = document.getElementById("pokeName");
    let pokeInput = pokeName.value;
    if (pokeInput == '' || pokeInput <= 1 || pokeInput == 'NaN') {
        pokeName.value = 898;
    }else {
        pokeName.value--;   
    }
    fetchPokemon();
}

const pokeImage = (url) =>{
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

const pokeType = (url) =>{
    for (let j = 0; j < 2; j++) {
        const pokeTp = document.getElementById('tpk'+j);
        if (url[j] == undefined) {
            pokeTp.style.background = 'tomato';
            pokeTp.style.color = 'tomato';
        }else{
            console.log(url[j].type.name);
            pokeTp.textContent = url[j].type.name;
            pokeTp.style.background = '#a3001f';
            pokeTp.style.color = 'black';
        }
    }
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