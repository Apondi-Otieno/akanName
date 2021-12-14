
var CC, YY, MM, DD, d, dayValue;
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var female = ["Akosua", "Adwoa", "Abenaa", "Akua", " Yaa", "Afua", "Ama"];


function validateForm() {
    var gender = document.getElementsByName("gender");
    if (document.myForm.year.value == "" || document.myForm.year.value.length != 4 || document.myForm.year.value > 2022 || document.myForm.year.value <= 1900) {
        alert("Invalid year of birth");
        document.myForm.year.focus();
        return false;

    }

    else if (document.myForm.month.value == "" || document.myForm.month.value > 12 || document.myForm.month.value < 0) {
        alert("Month invalid")
        document.myForm.month.focus();
        return false;
    }

    else if (document.myForm.day.value == "" || document.myForm.month.value > 31 || document.myForm.day.value <= 0) {
        alert('Invalid date')
        document.myForm.day.focus();
        return false;
    }

    else if (gender[0].checked == "" && gender[1].checked == "") {
        alert('Please select your gender');
        return false;
    }

    else {
        return true;
    }
}

//calculates the day of birth


function calcDay() {

    year = document.getElementById("year").value;
    CC = parseInt(year.substring(0, 2));
    YY = parseInt(year.substring(2, 4));
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("day").value);
    dy = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;

    var y = (Math.floor(dy))
    return y;

}
// calculates the gender

function getGender(g) {
    var gen = document.getElementsByName("gender");
    var gender;
    if (gen[0].checked == true) {
        gender = "male"
    }
    else if (gen[1].checked == true) {
        gender = "female"
    }
    else {
        return false;
    }
    // control structure to find akan names
    switch (gender) {
        case "male":

            switch (g) {
                case 1:

                    alert("Hey there,Your Akan name is " + male[0] + "!");
                    break

                case 2:

                    alert("Hey there,Your Akan name is " + male[1] + "!");;
                    break

                case 3:

                    alert("Hey there,Your Akan name is " + male[2] + "!");
                    break

                case 4:

                    alert("Hey there, Your Akan name is" + male[3] + "!");
                    break

                case 5:

                    alert("Hey there,Your Akan name is " + male[4] + "!");
                    break

                case 6:

                    alert("Hey there, Your Akan name is " + male[5] + "!");
                    break


                case 7:
                    alert("Hey there, Your Akan name is" + male[6] + "!");
                    break
            }
            break;

        case "female":

            switch (g) {
                case 1:

                    alert("Hey there, Your Akan name is " + female[0] + "!");
                    break

                case 2:

                    alert(" Hey there,Your Akan name is " + female[1] + "!");
                    break

                case 3:

                    alert(" Hey there,Your Akan name is " + female[2] + "!");
                    + "!"
                    break

                case 4:
                    alert(" Hey there, Your Akan name is " + female[3] + "!");

                    break

                case 5:

                    alert(" Hey there, Your Akan name is " + female[4] + "!");
                    break

                case 6:
                    alert(" Hey there, our Akan name is " + female[5] + "!");
                    break


                case 7:

                    alert(" Your Akan name is " + female[6] + "!");
                    break
            }
            break;

        default:
    }


}
// displays output

function main(event) {
    // The preventDefault() =if the event does not get explicitly handled, its default action should not be taken as it normally would be.
    event.preventDefault();


    if (validateForm()) {
        day = calcDay()
        getGender(day);}
    // this will display the string with the akan name

    else {
        return false;
    }
}
