const inputSearch = document.getElementById('search');
const output = document.getElementById('output');

search.addEventListener('input', searchStates);


//search states.json and filter it
async function searchStates() {

    const search = inputSearch.value;

    const res = await fetch('citys.json');
    const states = await res.json();

    let matches = states.filter(states => {
        const regex = new RegExp(`^${search}`, 'gi');
        return states.name.match(regex) || states.abbr.match(regex);
    });

    if(search.length === 0) {
        matches = [];
        output.innerHTML = '';
    }

    outputHtml(matches);
};

const outputHtml = matches => {
    if(matches.length > 0) {
        const html = matches.map(match => `<div> <h4> ${match.name} (${match.abbr}) <span> ${match.capital} </span> </h4> <small> Lat: ${match.lat} / Long: ${match.long} </small> </div>`).join('');
        console.log(html);
        output.innerHTML = html;
    }

    
}
