function printNumbers(num){
    if(num <= 100){
        console.log(num);
        printNumbers(num + 1);
    }
}
printNumbers(1);