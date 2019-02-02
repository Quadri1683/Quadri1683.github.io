function ReplaceWord()
{
    var keep = [];
    var name1 = document.StoryRep.input1.value;
    keep.push(name1);
    var name2 = document.StoryRep.input2.value;
    keep.push(name2);
    var adj1 = document.StoryRep.input3.value;
    keep.push(adj1);
    var num = document.StoryRep.input4.value;
    keep.push(num);
    var object = document.StoryRep.input5.value;
    keep.push(object);
    var verb = document.StoryRep.input6.value;
    keep.push(verb);
    var breed1 = document.StoryRep.input7.value;
    keep.push(breed1);
    var breed2 = document.StoryRep.input8.value;
    keep.push(breed2);
    var city = document.StoryRep.input9.value;
    keep.push(city);
    var food = document.StoryRep.input10.value;
    keep.push(food);





    var story = "There once was a cat named" + " " + keep[0] + ". The cat's owner was named" + " " + keep[1] + "." + " " +
        keep[1] + " " + "noticed that the cat was always" + " " + keep[2] + "." + " " + "Evatually the owner died at the age of"
        + " " + keep[3] + " " + "and" + " " + keep[0] + " " + "was abandoned. A few weeks later the cat forgot about its" +
        " owner and became attached to a" + " " + keep[4] + "." + " " + "With this object" + " " + keep[0] + " " + "was always"
        + " " + keep[5] + " " + "with it. Later" + " " + keep[0] + " " + "met a" + " " + keep[6] + " " + "and" + " " +
        keep[7] + ", and they became friends. all three of the cats walked all the way to" + " " + keep[8] + ". In this city " +
        "they found many diffrent types of foods but they all loved" + " " + keep[9] + ". Years passed and" + " " + keep[0] + " " +
        "lived happily ever after."
    return story;

}
