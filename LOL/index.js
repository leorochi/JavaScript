const champions = [
    {name: 'Corki', region: 'Bandópolis', yearReleased: 2013},
    {name: 'Lulu', region: 'Bandópolis', yearReleased: 2011},
    {name: 'Garen', region: 'Demacia', yearReleased: 2012},
    {name: 'Fiora', region: 'Demacia', yearReleased: 2012},
    {name: 'Ashe', region: 'Freljord', yearReleased: 2015},
    {name: 'Sejuani', region: 'Freljord', yearReleased: 2013},
    {name: 'Camille', region: 'Piltover', yearReleased: 2019},
    {name: 'Jayce', region: 'Piltover', yearReleased: 2021}
]

//forEach

//champions.forEach(champions => console.log(champions.name));

//filter

const filterRegion = champions.filter(champions => champions.region === 'Demacia');

const filterYear = champions.filter(champions => champions.yearReleased >= 2015);



//map
const mapNameRegion = champions.map(champions => ` ${champions.name} ${champions.region}`);

const mapYear = champions.map(champions => champions.yearReleased);

//sort

const sortName = champions.sort((a, b) => a.name > b.name ? 1 : -1);


// reduce

const reduceYear = mapYear.reduce((total, year) => total + year );

console.log(reduceYear);