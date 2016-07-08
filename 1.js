function animals(heads, legs) {
    var heads = prompt ('Введите число голов');
    var legs = prompt ('Введите число ног');
    var cows = (legs - (heads * 2))/2;
    var chicken = heads - cows;
    alert ('У вас ' + cows + ' коров и ' + chicken + ' куриц' );

}