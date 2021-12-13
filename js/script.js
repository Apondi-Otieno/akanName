
var CC, YY, MM, DD, d, dayValue;
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var female = ["Akosua", "Adwoa", "Abenaa", "Akua", " Yaa", "Afua", "Ama"];
var gender = ["male", "female"];

function validateForm() {
    var genders = document.getElementsByName("gender");
    if (document.myForm.year.value == "" || document.myForm.year.value.length != 4 || document.myForm.year.value > 2100 || document.myForm.year.value <= 1900) {
        alert("Invalid year of birth");
        document.myForm.year.focus();
        return false;

    }


    else if (document.myForm.month.value == "" || isNaN(document.myForm.month.value) || document.myForm.month.value > 12 || document.myForm.month.value <= 0) {
        alert("Month invalid")
        document.myForm.month.focus();
        return false;
    }

    else if (document.myForm.day.value == "" || isNaN(document.myForm.day.value) || document.myForm.month.value > 31 || document.myForm.day.value <= 0) {
        alert('Invalid date')
        document.myForm.day.focus();
        return false;
    }
    else if (genders[0].checked == false && genders[1].checked == false) {
        alert('Please select gender');
        return false;
    }

    else {
        return true;
    }
}

function calcDayValue() {

    year = document.getElementById("year").value;
    CC = parseInt(year.substring(0, 2));
    YY = parseInt(year.substring(2, 4));
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("date").value);
    d = d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
    console.log(d);
    return (Math.floor(d));

}

function getGender() {
    var gender = document.getElementsByName("gender");
    if (gender[0].checked == true) {
        var gender = "male"
    }
    else if (gender[1].checked == true) {
        var gender = "female"
    }
    else {
        return false;
    }

    switch (gender[0]) {
        case 0:
            dayValue == 1;
            {
                alert("You were born on " + days[0] + " and your name is " + male[0] + "!");
            }
            break;

        case 1:
            dayValue == 2;
            {
                alert("You were born on " + days[1] + " and your name is " + male[0] + "!");
            }
            break;

        case 2:
            dayValue == 3;
            {
                alert("You were born on " + days[2] + " and your name is " + male[0] + "!");
            }
            break;

        case 3:
            dayValue == 4;
            {
                alert("You were born on " + days[3] + " and your name is " + male[0] + "!");
            }
            break;

        case 4:
            dayValue == 5;
            {
                alert("You were born on " + days[4] + " and your name is " + male[0] + "!");
            }
            break;

        case 5:
            dayValue == 6;
            {
                alert("You were born on " + days[5] + " and your name is " + male[0] + "!");
            }
            break;


        case 6:
            dayValue == 7;
            {
                alert("You were born on " + days[6] + " and your name is " + male[0] + "!");
            }

            break;
    }

    switch (gender[0]) {
        case 0:
          if(  dayValue == 1);
            {
                alert("You were born on " + days[0] + " and your name is " + female[0] + "!");
            }
            break;

        case 1:
            if(dayValue == 2);
            {
                alert("You were born on " + days[1] + " and your name is " + female[0] + "!");
            }
            break;

        case 2:
           if( dayValue == 3);
            {
                alert("You were born on " + days[2] + " and your name is " + female[0] + "!");
            }
            break;

        case 3:
          if(  dayValue == 4);
            {
                alert("You were born on " + days[3] + " and your name is " + female[0] + "!");
            }
            break;

        case 4:
           if( dayValue == 5);
            {
                alert("You were born on " + days[4] + " and your name is " + female[0] + "!");
            }
            break;

        case 5:
          if(  dayValue == 6);
            {
                alert("You were born on " + days[5] + " and your name is " + female[0] + "!");
            }
            break;


        case 6:
           if( dayValue == 7);
            {
                alert("You were born on " + days[6] + " and your name is " + female[0] + "!");
            }

            break;
            default:
    }

    function getName() {
        dayValue = calcDayValue();
        getGender();
    }
}
