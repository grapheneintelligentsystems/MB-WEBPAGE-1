function go(name, age){
  alert("hello word");
  alert(name +"-"+ age);
}

function add (first, second){
  return first+second;
}
//go("mb", "36");
//var sum = add(1, 5);

//alert(sum);
var firstele = document.getElementById('firstin');
var secondele = document.getElementById('secondin');

firstele.addEventListener("click", alert("hi"));
