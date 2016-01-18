function findPrimeFactor(number){
    var num = number;
    var prime = 0;
    var div = 2;

    while (num > 1){
        while(num % div === 0){
            prime = num;
            num = prime / div;

        }
        div++;
    }

     return prime;

}

findPrimeFactor(600851475143);
