
var CC, YY, MM, DD, d, dayValue;
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var female = ["Akosua", "Adwoa", "Abenaa", "Akua", " Yaa", "Afua", "Ama"];


function validateForm() {
    var genders = document.getElementsByName("gender");
    if (document.myForm.year.value == "" || document.myForm.year.value.length != 4 || document.myForm.year.value > 2100 || document.myForm.year.value <= 1900) {
        alert("Invalid year of birth");
        document.myForm.year.focus(),
        return false,
    }


    else if (document.myForm.month.value == "" || isNaN(document.myForm.month.value) || document.myForm.month.value.length != 2 || document.myForm.month.value > 12 || document.myForm.month.value <= 0){}
        alert("Month invalid")
        document.myForm.month.focus(),
        return false,
    }

    else if (document.myForm.day.value == "" || isNaN(document.myForm.day.value) || document.myForm.month.value.length != 2 || document.myForm.month.value > 31 || document.myForm.day.value <= 0

{
alert ('Invalid date')
document.myForm.day.focus();
return false;
    }
}