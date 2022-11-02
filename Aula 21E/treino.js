var arr = [
    {id: 1, name: 'Duplicado'}, 
    {id: 1, name: 'John Snow'}, 
    {id: 2, name: 'Michael Scolfield'}, 
    {id: 3, name: 'Dexter Morgan'}
];

removerPorId(arr, 1);
arr = removerPorId2(arr, 2);

console.log(arr);

// Opção 1
function removerPorId(array, id) {
  var result = array.filter(function(el) {
    return el.id == id;
  });
    
  for(var elemento of result){
    var index = array.indexOf(elemento);    
    array.splice(index, 1);
  }
}

// Opção 2
function removerPorId2(array, id) {
  return array.filter(function(el) { 
    return el.id !== id; 
  });
}

function removerPorValorProduto(array, valorProduto) {
    var result = array.filter(function(e1) {
        
    }
}