//Individual validations
function validateFirstName() {
    var firstName = document.getElementById("firstName").value;
    if (firstName == "") {
        alert("First Name must be filled out");
        return false;
    } else {
        return true;
    }
}

function validateLastName() {
    var lastName = document.getElementById("lastName").value;
    if (lastName == "") {
        alert("Last Name must be filled out");
        return false;
    } else {
        return true;
    }
}

function validateStreet() {
    var street = document.getElementById("street").value;
    if (street == "") {
        alert("Street must be filled out");
        return false;
    } else {
        return true;
    }
}

function validateCity() {
    var city = document.getElementById("city").value;
    if (city == "") {
        alert("City must be filled out");
        return false;
    } else {
        return true;
    }
}

function validateZipCode() {
    var zipCode = document.getElementById("zipCode").value;
    if (zipCode.length !== 5);
        alert("Please enter a correct Zip Code");
        return false;
    } else {
        return true;
    }
}
//Final form validation (containing all sub-validations)

function validateForm() {
    validateFirstName();
    validateLastName();
    validateStreet();
    validateCity();
    validateZipCode();
}
 