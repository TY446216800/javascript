function fibonia(end){
    var num1=0,num2=1,num3;
    var arr=[];
    for(var i=1;i<=end;i++) {
        num3 = num2 + num1;
        num1 = num2;
        num2 = num3;

        if (num3>= end) {
            break;
        }
        arr.push(num3);
    }
    return arr;
}
console.log(fibonia(20));