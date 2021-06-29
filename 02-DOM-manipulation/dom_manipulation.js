// Ex 1. Add the .blue CSS class to the th elements
//ho creato la funzione e con document.querySelectorAll ho selezionato il tag th 
const thElements = document.querySelectorAll('th');
// con il metodo forEach ho selezionato tutti gli elementi dentrola funzione
thElements.forEach((element) => {
  // ho assegnato la classe alla funzione 
  element.className = "blue";
});

// Ex 2. Count the number of table body rows there are
//       Make the function teamCount() return it
const teamCount = () => {
  // TODO: return the number of teams
  //ho creato la funzione e con document.querySelectorAll ho selezionato tutti i tag tr
  const trElements = document.querySelectorAll('tr');
// ho usato la funzione che mi fa ritornare tutto la lungesa degli elementi dentro la funzione creato e -1 per ridure di -1
  return trElements.length -1;
};

// Ex 3. Say there is a 15th team added to the table.
//       Add a row at the bottom, this new team (Spezia) should have 39 points.
//ho creato una funzione e con document.query... ho selezionato il tag
const list = document.querySelector('tbody');
//ho preso la funzione ed ho aggiunto un elemento e dove metterlo con beforeend
list.insertAdjacentHTML('beforeend', ' <tr><td>15</td><td>Spezia</td><td>39</td></tr>');

// Ex 4. Write some code to sum all points given to all teams
//       Make the function summarizePoints() return it
//ho creato la funzione 
const summarizePoints = () => {
  //creato una funzione che mi permette di selezionare l'ultimo elemento 
const selecteTds = document.querySelectorAll('tbody tr td:last-child');
//creato una finzione che mi permettera di fare la somma 
let sum =0;
//con forEach ho selezionato gli elementi dentro la funzione
selecteTds.forEach(selecteTd => {
  //e qua ho fatto l'operazione di somma 
  sum += parseInt(selecteTd.innerText);
})
  // TODO: return the sum
  //ho stampato il risultato con la funzione sum
  return sum;
};


// Ex 5. Change the background color of all `<th>` cells to #DDF4FF
//ho creato la funzione e con document.querySelectorAll ho selezionato il tag th 
const thEl = document.querySelectorAll('th');
//con forEach ho selezionato gli elementi dentro la funzione
thEl.forEach((element) => {
  //ho assegnato un colore del fondo 
  element.style.backgroundColor = "#DDF4FF";
});



// calls of functions you created on top (DO NOT REMOVE)
console.log(`team count: ${teamCount()}`);
console.log(`summarize points: ${summarizePoints()}`);
