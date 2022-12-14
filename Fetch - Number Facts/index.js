const inputNumber = document.querySelector('#number');
const output = document.querySelector('#output');





inputNumber.addEventListener('input', getNumber);


async function getNumber() {
    const number = inputNumber.value;
    const p = document.createElement('p');
    const res = await fetch('http://numbersapi.com/'+number);
    const text = await res.text();

    
    

    if(number !='') {
        output.innerHTML = '';
        p.innerHTML = text;
        output.appendChild(p);
    } else {
        output.innerHTML = '';
    }
        
    /*then(response => response.text())
    .then(data => {
        if(number != '') {
            console.log(data);
        }
    })
    .catch(err => console.log(err));*/
  

}