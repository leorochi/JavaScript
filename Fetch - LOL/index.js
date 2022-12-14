const champions = document.getElementById('champions');
const output = document.getElementById('output');


champions.addEventListener('click', getChampions);

async function getChampions() {
    const res = await fetch('champions.json');
    const json = await res.json();
    
    const busca = document.createElement('input');
    busca.setAttribute('class', 'busca');
    busca.setAttribute('placeholder', 'Buscar');
    output.appendChild(busca);

    json.forEach(champions => {
        output.innerHTML += `<div class='list'> <ul> <li> Campeão: ${champions.name} - ${champions.title} </li> <img src="${champions.icon}" </ul> <div class='listMore'> <button class='more'> Clique para saber mais </button> </div> </div>`;
    })
 
    const btnMore = document.querySelectorAll('.more').forEach(i => {
        i.addEventListener('click', getMore)
    })


    async function getMore(campeao) {
        const res = await fetch('champions.json');
        const json = await res.json();

            json.forEach(champions => {
            const divList = document.querySelector('.listMore');
            divList.innerHTML += `<ul class='status'> <li> ${champions.name} </li> <li> Tags: ${champions.tags} </li> <li> HP: ${champions.stats.hp} </li> <li> Descrição: ${champions.description} </li> </ul>`
        })
        
    }
    
}



