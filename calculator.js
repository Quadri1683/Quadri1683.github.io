function calculate(expression) //ex.    expression is 2+5 or 9*6 or 10/5
{
    //'expression' is a STRING of EVERYTHING in your calculatorWindow
    //Need to extract the first number from 'expression'
    var firstNum = Number(expression.substr(0,1));
    var operator = expression.substr(1,1);
    var secondNum = Number(expression.substr(2,1));


    if (operator === '+')
    {
        return addNums(firstNum, secondNum);
    }
    else if (operator === '-')
    {
        return subtractNums(firstNum, secondNum);
    }
    else if (operator === '*')
    {
        return multiplyNums(firstNum, secondNum);
    }
    else if (operator === '/')
    {
        return divideNums(firstNum, secondNum);
    }
    else if (operator === '^')
    {
        return powerNums(firstNum, secondNum);
    }
}
function addNums(p1, p2) //addNums expects 2 parameters... p1 and p2.
{
    return p1+p2;
}
function subtractNums(p1, p2)
{
    return p1-p2;
}
function multiplyNums(p1, p2)
{
    return p1*p2;
}
function divideNums(p1, p2)
{
    return p1/p2;
}
function powerNums(p1, p2)
{
    return Math.pow(p1, p2);
}
