function add() {
  let number1 = document.getElementById('number1').value;
  let number2 = document.getElementById('number2').value;
  document.getElementById('result').value = Number(number1) + Number(number2);
}

function subt() {
  let number1 = document.getElementById('number1').value;
  let number2 = document.getElementById('number2').value;
  document.getElementById('result').value = Number(number1) - Number(number2);
}

function div() {
  let number1 = document.getElementById('number1').value;
  let number2 = document.getElementById('number2').value;
  document.getElementById('result').value = `${number1}/${number2}: ${Number(number1) / Number(number2)} & ${number2}/${number1}: ${Number(number2) / Number(number1)}`;
}

function mul() {
  let number1 = document.getElementById('number1').value;
  let number2 = document.getElementById('number2').value;
  document.getElementById('result').value = Number(number1) * Number(number2);
}