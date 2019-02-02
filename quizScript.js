function checkAnswers()
{
    var score=0;
    var feedback=[];
    //Question 1
    var Q1Answer = document.Quiz.a1.value.toLowerCase();

    if (Q1Answer === 'united states')
    {
        score++;
        feedback.push(" Question 1 - ✔");
    }
    else if (Q1Answer === 'usa')
    {
        score++;
        feedback.push(" Question 1 - ✔");
    }
    else
    {
        feedback.push(" Question 1 - ✘");
        feedback.push(" Question 1 is United States");
    }
    //Question 2
    if (document.Quiz.a2.value === '7.7 Billion')
    {
        score ++;
        feedback.push(" Question 2 - ✔");
    }
    else
    {
        feedback.push(" Question 2 - ✘");
    }
    //Question 3
    if (document.Quiz.a3A.checked === true && document.Quiz.a3C.checked === true && document.Quiz.a3B.checked === false && document.Quiz.a3D.checked === false && document.Quiz.a3E.checked === false)
    {
        score ++;
        feedback.push(" Question 3 - ✔");
    }
    else
    {
        feedback.push(" Question 3 - ✘");
    }
    //Question 4
    if (document.Quiz.a4.value === 'China')
    {
        score ++;
        feedback.push(" Question 4 - ✔");
    }
    else
    {
        feedback.push(" Question 4 - ✘");
    }
    //Question 5
    var Q5Answer = document.Quiz.a5.value.toLowerCase();
    if(Q5Answer === 'washington')
    {
        score ++;
        feedback.push(" Question 5 - ✔");
    }
    else
    {
        feedback.push(" Question 5 - ✘");
    }
    //Question 6
    if (document.Quiz.a6A.checked === true && document.Quiz.a6B.checked === true && document.Quiz.a6C.checked === true && document.Quiz.a6D.checked === false && document.Quiz.a6E.checked === false && document.Quiz.a6F.checked === false)
    {
        score ++;
        feedback.push(" Question 6 - ✔");
    }
    else
    {
        feedback.push(" Question 6 - ✘");
    }
    //Question 7
    if (document.Quiz.a7.value === 'False')
    {
        score ++;
        feedback.push(" Question 7 - ✔");
    }
    else
    {
        feedback.push(" Question 7 - ✘");
    }
    if (document.Quiz.a8.value === '71')
    {
        score ++;
        feedback.push(" Question 8 - ✔")
    }
    else
    {
        feedback.push(" Question 8 - ✘")
    }

    var num = score + "/8";
    alert(num);
    return feedback;
}
