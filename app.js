/**
 * Created by dmercier on 2015-09-23.
 */

$(document).ready(function() {

    displayLocation();

    var number = "0";
    var toDisplay = "0";
    calc = new Calculator();

    $("#setMemory").click(function() {
        alert("mem set to " + number);
        if(number === undefined) {
            calc.setMemory(0);
        }
        else {
            calc.setMemory(number);
        }
    });

    $("#useMemory").click(function() {
        var tmp = calc.getMemory();

        if(tmp === undefined) {
            alert("memory not set");
            return;
        }

        number = tmp;
        toDisplay += number;
        display(toDisplay);
    });

    $("#reset").click(function() {
        calc.clear();
        number = "0";
        toDisplay = "0";
        display(toDisplay);
    });

    $("#equal").click(function() {
        if(number !== undefined) {
            calc.value(number);
        }
        result = calc.equals();
        number = result.toString();
        toDisplay = number;
        displayWithMotion(toDisplay);
    });

    $("#add").click(function() {
        calc.value(number);
        calc.add();
        number = 0;
        toDisplay += "+";
        display(toDisplay);
    });

    $("#substract").click(function() {
        calc.value(number);
        calc.subtract();
        number = 0;
        toDisplay += "-";
        display(toDisplay);
    });

    $("#multiply").click(function() {
        calc.value(number);
        calc.multiply();
        number = 0;
        toDisplay += "x";
        display(toDisplay);
    });

    $("#divide").click(function() {
        calc.value(number);
        calc.divide();
        number = 0;
        toDisplay += "/";
        display(toDisplay);
    });

    $("#sin").click(function() {
        calc.sin(number);
        toDisplay += "sin";
        number = undefined;
        display(toDisplay);
    });

    $("#cos").click(function() {
        calc.cos(number);
        toDisplay += "cos";
        number = undefined;
        display(toDisplay);
    });

    $("#tan").click(function() {
        calc.tan(number);
        toDisplay += "tan";
        number = undefined;
        display(toDisplay);
    });

    $("#factorial").click(function() {
        calc.factorial(number);
        toDisplay += "!";
        number = undefined;
        display(toDisplay);
    });

    $("#0").click(function() {
        number = concatenate(number, "0");
        toDisplay = concatenate(toDisplay, "0");
    });

    $("#1").click(function() {
        number = concatenate(number, "1");
        toDisplay = concatenate(toDisplay, "1");
    });

    $("#2").click(function() {
        number = concatenate(number, "2");
        toDisplay = concatenate(toDisplay, "2");
    });

    $("#3").click(function() {
        number = concatenate(number, "3");
        toDisplay = concatenate(toDisplay, "3");
    });

    $("#4").click(function() {
        number = concatenate(number, "4");
        toDisplay = concatenate(toDisplay, "4");
    });

    $("#5").click(function() {
        number = concatenate(number, "5");
        toDisplay = concatenate(toDisplay, "5");
    });

    $("#6").click(function() {
        number = concatenate(number, "6");
        toDisplay = concatenate(toDisplay, "6");
    });

    $("#7").click(function() {
        number = concatenate(number, "7");
        toDisplay = concatenate(toDisplay, "7");
    });

    $("#8").click(function() {
        number = concatenate(number, "8");
        toDisplay = concatenate(toDisplay, "8");
    });

    $("#9").click(function() {
        number = concatenate(number, "9");
        toDisplay = concatenate(toDisplay, "9");
    });
});

function displayWithMotion(toDisplay) {
    //alert("displayResult " + toDisplay);
    $("#result").fadeOut(function() {
        $("#result").text(toDisplay).fadeIn();
    });
};

function display(toDisplay) {
    //alert("displayResult " + toDisplay);
    $("#result").text(toDisplay);
};

function concatenate(str, toConcatenate) {
    //alert(str + " " + toConcatenate);
    if(str === "0" || str === undefined)
    {
        str = toConcatenate;
    }
    else {
        str += toConcatenate;
    }

    display(str);

    return str;
}
