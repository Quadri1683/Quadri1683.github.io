function letterGrade()
{
    let percentile = (document.GradeConverter.percent.value);

    if (percentile > '99')
    {
        return "A+";
    }
    else if (percentile === '100')
    {
        return "A+";
    }
    else if (percentile > '90')
    {
        return "A";
    }
    else if (percentile > '89.5')
    {
        return "A-";
    }
    else if (percentile > '89')
    {
        return "B+";
    }
    else if (percentile > '80')
    {
        return "B";
    }
    else if (percentile > '79.5')
    {
        return "B-";
    }
    else if (percentile > '79')
    {
        return "C+";
    }
    else if (percentile > '70')
    {
        return "C";
    }
    else if (percentile > '69.5')
    {
        return "C-";
    }
    else if (percentile > '69')
    {
        return "D+";
    }
    else if (percentile > '60')
    {
        return "D";
    }
    else if (percentile > '59.5')
    {
        return "D-";
    }
    else if (percentile > '50')
    {
        return "F";
    }
    else if (percentile > '100')
    {
        return "A++";
    }
    else if (percentile < '50')
    {
        return "F-";
    }
    else if (percentile === '50')
    {
        return "F-";
    }
    else if (percentile === '0')
    {
        return "ZERO!!!!!";
    }
}

function Temperature()
{
    var temperature =document.TemperatureBug.num1.value;
    if (temperature > 134.1)
    {
        document.getElementById("frame").src = "img/Desert.jpg";
        return "YOU ARE melting!!!";
    }
    else if (temperature > 104)
    {
        document.getElementById("frame").src = "img/heat wave.jpg";
        return "Heat Wave!";
    }
    else if (temperature > 82)
    {
        document.getElementById("frame").src = "img/summer.jpg";
        return "Summer";
    }
    else if (temperature > 69.9)
    {
        document.getElementById("frame").src = "img/spring.jpg";
        return "Spring";
    }
    else if (temperature > 50)
    {
        document.getElementById("frame").src = "img/fall.jpg";
        return "Fall";
    }
    else if (temperature > 32)
    {
        document.getElementById("frame").src = "img/winter.jpg";
        return "Winter";
    }
    else if (temperature > 0)
    {
        document.getElementById("frame").src = "img/snow storm.jpg";
        return "Snow Storm";
    }
    else if (temperature > -32)
    {
        document.getElementById("frame").src = "img/polar vortex num 2.jpg";
        return "Polar Vortex";
    }
    else if (temperature > -100)
    {
        document.getElementById("frame").src = "img/polar vortex.jpg";
        return "FROZEN";
    }
    else if (temperature > -9999999999999999999999999999999999999999999999)
    {
        document.getElementById("frame").src = "img/antartica.jpg";
        return "CONDITIONS UNFIT FOR HUMANITY";
    }
}
/*disclaimer- the calories lost in this calculator may not be exactly accurate and may prove to be false
depending on weight, intensity, and condition.*/
function CalorieCounter() {
    var activity = list.options[list.selectedIndex].value.toLowerCase();
    var time = document.getElementById('time').value;
    if (activity == 'walking')
    {
        document.getElementById("border").src="img/walking.jpg";
        return time * 3;
    }
    else if (activity == 'running')
    {
        document.getElementById("border").src="img/running.jpg";
        return time * 16;
    }
    else if (activity == 'soccer')
    {
        document.getElementById("border").src="img/soccer.jpg";
        return time * 9.5;
    }
    else if (activity == 'basketball')
    {
        document.getElementById("border").src="img/basketball.jpg";
        return time * 9;
    }
    else if (activity == 'tennis')
    {
        document.getElementById("border").src="img/tennis.jpg";
        return time * 9.6;
    }
    else if (activity == 'swimming')
    {
        document.getElementById("border").src="img/swim.jpg";
        return time * 8;
    }
    else if (activity == 'badminton')
    {
        document.getElementById("border").src="img/badminton1.jpg";
        return time * 10;
    }
    else if (activity == 'baseball')
    {
        document.getElementById("border").src="img/baseball.JPG";
        return time * 6;
    }
    else if (activity == 'pingpong')
    {
        document.getElementById("border").src="img/table.jpg";
        return time * 5;
    }
    else if (activity == 'hockey')
    {
        document.getElementById("border").src="img/hockey.jpg";
        return time * 9.8;
    }
    else if (activity == 'sitting')
    {
        document.getElementById("border").src="img/sitting.png";
        return time * 2.5;
    }
    else if (activity == 'standing')
    {
        document.getElementById("border").src="img/standing.jpg";
        return time * 3;
    }
    else if (activity == 'sleeping')
    {
        document.getElementById("border").src="img/sleeping.jpg";
        return time * 1;
    }
    else if (activity == 'lacrosse')
    {
        document.getElementById("border").src="img/lacrosse.jpg";
        return time * 10.1;
    }
    else if (activity == 'cycling')
    {
        document.getElementById("border").src="img/bike.jpg";
        return time * 11;
    }
    else if (activity == 'gaming')
    {
        document.getElementById("border").src="img/game.jpg";
        return time * 2.3;
    }
    else if (activity == 'cricket')
    {
        document.getElementById("border").src="img/cricket.jpg";
        return time * 7;
    }
    else if (activity == 'gymnastics')
    {
        document.getElementById("border").src="img/gym.jpg";
        return time * 5;
    }
    else if (activity == 'weight lifting')
    {
        document.getElementById("border").src="img/w.jpg";
        return time * 7.1;
    }
    else if (activity == 'martial arts')
    {
        document.getElementById("border").src="img/arts.jpg";
        return time *15;
    }
    else if (activity == 'golf')
    {
        document.getElementById("border").src="img/golf.jpg";
        return time * 6;
    }
    else if (activity == 'rollerblading')
    {
        document.getElementById("border").src="img/roller.jpg";
        return time * 18;
    }
    else if (activity == 'ice skating')
    {
        document.getElementById("border").src="img/ice.jpg";
        return time * 15;
    }
    else if (activity == 'football')
    {
        document.getElementById("border").src="img/foot.jpg";
        return time * 6.2;
    }
    else if (activity == 'surfing')
    {
        document.getElementById("border").src="img/surf.jpg";
        return time * 7;
    }
    else if (activity == 'climbing')
    {
        document.getElementById("border").src="img/climb.jpg";
        return time * 11;
    }
    else if (activity == 'canoeing')
    {
        document.getElementById("border").src="img/c.jpg";
        return time * 10;
    }
    else if (activity == 'dodgeball')
    {
        document.getElementById("border").src="img/dodge.jpg";
        return time * 5.7;
    }
    else if (activity == 'wrestling')
    {
        document.getElementById("border").src="img/wrestling.jpg";
        return time * 7.6;
    }
    else if (activity == 'volleyball')
    {
        document.getElementById("border").src="img/volley.jpg";
        return time * 5.7;
    }
    else if (activity == 'archery')
    {
        document.getElementById("border").src="img/arch.jpg";
        return time * 6;
    }
    else if (activity == 'boxing')
    {
        document.getElementById("border").src="img/boxing.jpg";
        return time * 18;
    }
    else if (activity == 'judo')
    {
        document.getElementById("border").src="img/judo.jpg";
        return time * 15;
    }
    else if (activity == 'sledding')
    {
        document.getElementById("border").src="img/sled.jpg";
        return time * 11;
    }
    else if (activity == 'fishing')
    {
        document.getElementById("border").src="img/fish.jpg";
        return time * 5;
    }
    else if (activity == 'water polo')
    {
        document.getElementById("border").src="img/waterp.jpg";
        return time * 14;
    }
    else if (activity == 'yoga')
    {
        document.getElementById("border").src="img/yoga.jpg";
        return time * 4;
    }
    else if (activity == 'trampoline jumping')
    {
        document.getElementById("border").src="img/jump.jpg";
        return time * 4.2;
    }
    else if (activity == 'diving')
    {
        document.getElementById("border").src="img/diving.jpg";
        return time * 4.2;
    }
    else if (activity == 'kickball')
    {
        document.getElementById("border").src="img/kick.jpg";
        return time * 6.2;
    }
    else if (activity == 'bowling')
    {
        document.getElementById("border").src="img/bowl.jpg";
        return time * 7;
    }

}

