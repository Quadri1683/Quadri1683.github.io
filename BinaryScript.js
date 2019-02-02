function tenToSmall()
{
    var x = Number(document.toBinary.bin.value);
    y = 2;
    smallNum = "";

    while (x > 0)
    {
        smallNum = x%y + smallNum;
        x = Math.floor(x/y)
    }
    return smallNum;
}

function smallToTen()
{
    var num = Number(document.toTen.binary.value);
    base = 2;
    tenNum = 0;
    numLength = num.toString().length;

    while(numLength > 0)
    {
        var denominator = Math.pow(10, (numLength-1));

        var currentDigit = Math.floor(num/denominator);
        tenNum = tenNum + currentDigit*Math.pow(base, numLength-1);

        num = num%denominator;
        numLength--;

    }
    return tenNum;
}

function NumConvert() {
    var num = Number(document.XtoY.number.value);
    base = Number(document.XtoY.base.value);
    tenNum = 0;
    numLength = num.toString().length;

    while (numLength > 0) {
        var denominator = Math.pow(10, (numLength - 1));

        var currentDigit = Math.floor(num / denominator);
        tenNum = tenNum + currentDigit * Math.pow(base, numLength - 1);

        num = num % denominator;
        numLength--;
    }
    ten = tenNum;
    var y = Number(document.XtoY.Dbase.value);
    smallNum = "";

    while (ten > 0) {
        smallNum = ten % y + smallNum;
        ten = Math.floor(ten / y)
    }
    return smallNum;
}


