<head>
    <meta charset="UTF-8">
    <title>Задание 2</title>
</head>
<body>
<script>
    
var dogs = prompt("Введите количество щенков?");

var reaction = ["Чего так мало?", "Более чем достаточно", "Почему их так много", "Ого, 101 далматинец!"];

alert(howManyAnimals(dogs));

var respond = [];

function howManyAnimals(number){

  if
  (number<= 10){
    respond= reaction[0];
  }
  else if
  (number<= 50){
    respond= reaction[1];
  }
  else if
  (number<= 100){
    respond= reaction[2];
  }
  else if
  (number== 101) {
    respond= reaction[2] +'? '+ reaction[3];
  }
return respond;
}
</script>
</body>
</html>
