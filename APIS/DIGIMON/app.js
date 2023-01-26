const allCharacters = document.querySelector(".allCharacters");
const training = document.querySelector(".inTraining");
const rookie = document.querySelector(".rookie");
const champion = document.querySelector(".champion");
const ultimate = document.querySelector(".ultimate");
const fresh = document.querySelector(".fresh");
const mega = document.querySelector(".mega");
const armor = document.querySelector(".armor");

// ALL CHARACTERS

const getCharacters = async () => {
    const data = await fetch("https://digimon-api.vercel.app/api/digimon");

    const json = await data.json();

    mapDigimons(json);
}

const mapDigimons = (json) =>{
    const mappedDigimons = json.map((digi) => ({
        name: digi.name, 
        img: digi.img,
        level: digi.level
    }));
    printDigimons(mappedDigimons);
} 

const printDigimons = (json) => {

    const container = document.querySelector("#container");

    container.innerHTML = "";

    for (const digimon of json) {
        const figure = document.createElement("figure");

        figure.innerHTML = `
        <h2>${digimon.name}</h2>
        <img src=${digimon.img}>
        <p>${digimon.level}</p>
        `

        container.appendChild(figure)
    }
}

allCharacters.addEventListener("click", () => {
    const imgHide = document.querySelector(".imageQue")
    imgHide.remove();
    getCharacters();
})


//IN TRAINING


const getInTraining = async () => {
    const data = await fetch("https://digimon-api.vercel.app/api/digimon");

    const json = await data.json();

    const filterInTraining = json.filter((inTrain) => inTrain.level === "In Training");

    mapDigimons(filterInTraining);
}

const mapFilterInTraining = (filterInTraining) =>{
    const filteredInTraining = filterInTraining.map((digi) => ({
        name: digi.name, 
        img: digi.img,
        level: digi.level
    }));
    printFilterInTraining(filteredInTraining);
} 

const printFilterInTraining = (filteredInTraining) => {

    const inTrained = document.querySelector("#inTraining");

    inTrained.innerHTML = "";

    for (const digimon of filteredInTraining) {
        const figure = document.createElement("figure");

        figure.innerHTML = `
        <h2>${digimon.name}</h2>
        <img src=${digimon.img}>
        <p>${digimon.level}</p>
        `

        inTrained.appendChild(figure)
    }
}

training.addEventListener("click", () => {
    getInTraining();
})






//ROOKIE

const getRookie = async () => {
    const data = await fetch("https://digimon-api.vercel.app/api/digimon");

    const json = await data.json();

    const filterRookie = json.filter((rookie) => rookie.level === "Rookie");

    mapDigimons(filterRookie);
}

const mapFilterRookie = (filterRookie) =>{
    const filteredRookie = filterRookie.map((digi) => ({
        name: digi.name, 
        img: digi.img,
        level: digi.level
    }));
    printFilterRookie(filteredRookie);
} 

const printFilterRookie = (filteredRookie) => {

    const rookie = document.querySelector("#rookie");

    rookie.innerHTML = "";

    for (const digimon of filteredRookie) {
        const figure = document.createElement("figure");

        figure.innerHTML = `
        <h2>${digimon.name}</h2>
        <img src=${digimon.img}>
        <p>${digimon.level}</p>
        `

        rookie.appendChild(figure)
    }
}

rookie.addEventListener("click", () => {
    getRookie();
})


// CHAMPION

const getChampion = async () => {
    const data = await fetch("https://digimon-api.vercel.app/api/digimon");

    const json = await data.json();

    const filterChampion = json.filter((champion) => champion.level === "Champion");

    mapDigimons(filterChampion);
}

const mapFilterChampion = (filterChampion) =>{
    const filteredChampion = filterChampion.map((digi) => ({
        name: digi.name, 
        img: digi.img,
        level: digi.level
    }));
    printFilterChampion(filteredChampion);
} 

const printFilterChampion = (filteredChampion) => {

    const champion = document.querySelector("#champion");

    champion.innerHTML = "";

    for (const digimon of filteredChampion) {
        const figure = document.createElement("figure");

        figure.innerHTML = `
        <h2>${digimon.name}</h2>
        <img src=${digimon.img}>
        <p>${digimon.level}</p>
        `

        champion.appendChild(figure)
    }
}

champion.addEventListener("click", () => {
    getChampion();
})


// ULTIMATE

const getUltimate = async () => {
    const data = await fetch("https://digimon-api.vercel.app/api/digimon");

    const json = await data.json();

    const filterUltimate = json.filter((ultimate) => ultimate.level === "Ultimate");

    mapDigimons(filterUltimate);
}

const mapFilterUltimate = (filterUltimate) =>{
    const filteredUltimate = filterUltimate.map((digi) => ({
        name: digi.name, 
        img: digi.img,
        level: digi.level
    }));
    printFilterUltimate(filteredUltimate);
} 

const printFilterUltimate = (filteredUltimate) => {

    const ultimate = document.querySelector("#ultimate");

    ultimate.innerHTML = "";

    for (const digimon of filteredUltimate) {
        const figure = document.createElement("figure");

        figure.innerHTML = `
        <h2>${digimon.name}</h2>
        <img src=${digimon.img}>
        <p>${digimon.level}</p>
        `

        ultimate.appendChild(figure)
    }
}

ultimate.addEventListener("click", () => {
    getUltimate();
})


// FRESH

const getFresh = async () => {
    const data = await fetch("https://digimon-api.vercel.app/api/digimon");

    const json = await data.json();

    const filterFresh = json.filter((fresh) => fresh.level === "Fresh");

    mapDigimons(filterFresh);
}

const mapFilterFresh = (filterFresh) =>{
    const filteredFresh = filterFresh.map((digi) => ({
        name: digi.name, 
        img: digi.img,
        level: digi.level
    }));
    printFilterFresh(filteredFresh);
} 

const printFilterFresh = (filteredFresh) => {

    const fresh = document.querySelector("#fresh");

    fresh.innerHTML = "";

    for (const digimon of filteredUltimate) {
        const figure = document.createElement("figure");

        figure.innerHTML = `
        <h2>${digimon.name}</h2>
        <img src=${digimon.img}>
        <p>${digimon.level}</p>
        `

        fresh.appendChild(figure)
    }
}

fresh.addEventListener("click", () => {
    getFresh();
})



// MEGA

const getMega = async () => {
    const data = await fetch("https://digimon-api.vercel.app/api/digimon");

    const json = await data.json();

    const filterMega = json.filter((mega) => mega.level === "Mega");

    mapDigimons(filterMega);
}

const mapFilterMega = (filterMega) =>{
    const filteredMega = filterMega.map((digi) => ({
        name: digi.name, 
        img: digi.img,
        level: digi.level
    }));
    printFilterMega(filteredMega);
} 

const printFilterMega = (filteredMega) => {

    const mega = document.querySelector("#mega");

    mega.innerHTML = "";

    for (const digimon of filteredMega) {
        const figure = document.createElement("figure");

        figure.innerHTML = `
        <h2>${digimon.name}</h2>
        <img src=${digimon.img}>
        <p>${digimon.level}</p>
        `

        mega.appendChild(figure)
    }
}

mega.addEventListener("click", () => {
    getMega();
})


// ARMOR

const getArmor = async () => {
    const data = await fetch("https://digimon-api.vercel.app/api/digimon");

    const json = await data.json();

    const filterArmor = json.filter((armor) => armor.level === "Armor");

    mapDigimons(filterArmor);
}

const mapFilterArmor = (filterArmor) =>{
    const filteredArmor = filterArmor.map((digi) => ({
        name: digi.name, 
        img: digi.img,
        level: digi.level
    }));
    printFilterArmor(filteredArmor);
} 

const printFilterArmor = (filteredArmor) => {

    const armor = document.querySelector("#armor");

    armor.innerHTML = "";

    for (const digimon of filteredArmor) {
        const figure = document.createElement("figure");

        figure.innerHTML = `
        <h2>${digimon.name}</h2>
        <img src=${digimon.img}>
        <p>${digimon.level}</p>
        `

        armor.appendChild(figure)
    }
}

armor.addEventListener("click", () => {
    getArmor();
})

