let valwasher =()=>{
    let firstName = document.washer.firstname;
    let lastName = document.washer.lastname;
    let userName = document.washer.username;
    let Password = document.washer.password;
    let DOB = document.washer.dateofbirth;
    let employeeId = document.washer.employeeid;
    let placeOfResidence = document.washer.placeofresidence;
    let Nin = document.washer.nin;
    let Gender = document.washer.gender;
    let employeeType = document.washer.employeetype;

//Errors
    let firstNameError=document.getElementById('firstnameError');
    let lastNameError = document.getElementById('lastnameError');
    let userNameError = document.getElementById('usernameError');
    let PasswordError = document.getElementById('passwordError');
    let DOBError = document.getElementById('dateofbirthError');
    let employeeIdError = document.getElementById('employeeidError');
    let placeOfResidenceError = document.getElementById('placeofresidenceError');
    let NinError = document.getElementById('ninError');
    let GenderError = document.getElementById('genderError');
    let employeeTypeError = document.getElementById('employeetypeError');


//Regular expressions
    var NameReg = /^[A-Z]([a-z])+$/;
    var employeeIdReg = /^Zwash([0-9]{3})$/;

    //First name validation
    if (firstName.value.length < 8) {
        firstNameError.innerHTML = ' Name Should be atleast 8 Characters ';
        firstNameError.style = 'color:red; font-size:10px;'
        firstName.style.border = "1px solid red"
        return false;
    } else if (firstName.value.length >= 8 && firstName.value.match(NameReg)) {
        firstNameError.innerHTML = '';
        firstName.style.border = "1px solid green"
    } else if (!(firstName.value.length <= 8 && firstName.value.match(NameReg))) {
        firstNameError.innerHTML = 'Name start with Capital letter ';
        firstNameError.style = 'color:red; font-size:10px;'
        firstName.style.border = "1px solid red"
        return false;
    } else if (firstName.value.length = 0) {
        firstNameError.innerHTML = ''
    }

    //Last name validation
    if (lastName.value.length < 8) {
        lastNameError.innerHTML = ' Name Should be atleast 8 Characters ';
        lastNameError.style = 'color:red; font-size:10px;'
        lastName.style.border = "1px solid red"
        return false;
    } else if (lastName.value.length >= 8 && lastName.value.match(NameReg)) {
        lastNameError.innerHTML = '';
        lastName.style.border = "1px solid green"
    } else if (!(lastName.value.length <= 8 && lastName.value.match(NameReg))) {
        lastNameError.innerHTML = 'Name start with Capital letter ';
        lastNameError.style = 'color:red; font-size:10px;'
        lastName.style.border = "1px solid red"
        return false;
    } else if (lastName.value.length = 0) {
        lastNameError.innerHTML = 'Last name must be filled';
        lastName.style.border = "1px solid red"

    }


    //username validation
    if (userName.value == '') {
        userName.style.border = '1px solid red'
        userNameError.innerHTML = 'please fill in user name'
        userNameError.style = 'color:red; font-size:10px;'
        return false;
    }else{
        userName.style.border = "1px solid green"
        userNameError.innerHTML = '';
        
    }

    //password validation
    if (Password.value == '') {
        Password.style.border = '1px solid red'
        PasswordError.innerHTML = 'please fill in password'
        PasswordError.style = 'color:red; font-size:10px;'
        return false;
    }else{
        Password.style.border = "1px solid green"
        PasswordError.innerHTML = '';
    }

    //Date of birth validation
    if (DOB.value == '') {
        DOB.style.border = '1px solid red'
        DOBError.innerHTML = 'please fill in date of birth'
        DOBError.style = 'color:red; font-size:10px;'
        return false;
    }else{
        DOB.style.border = "1px solid green"
        DOBError.innerHTML = '';
    }

    //Employee id validation
    // if (employeeId.value == '') {
    //     employeeId.style.border = '1px solid red'
    //     employeeIdError.innerHTML = 'please fill in employee id'
    //     employeeIdError.style = 'color:red; font-size:10px;'
    //     return false;
    // }
    if (!(employeeId.value.length == 8)) {
        employeeIdError.innerHTML = ' Zwash ID Should have 8 Characters ';
        employeeIdError.style = 'color:red; font-size:10px';
        employeeId.style.border = "1px solid red"
        return false;
    } else if ((employeeId.value.length == 8) && (employeeId.value.match(employeeIdReg))) {
        employeeIdError.innerHTML = '';
        employeeId.style.border = "1px solid green"
    } else if (!(employeeId.value.match(employeeIdReg))) {
        employeeIdError.innerHTML = 'Zwash ID starts with Zwash and 3 numbers follow  ';
        employeeId.style.border = "1px solid red"
        return false;
    } else if (employeeId.value.length = 0) {
        employeeIdError.innerHTML = '';

    }

    //place of residence validation
    if (placeOfResidence.value == '') {
        placeOfResidence.style.border = '1px solid red'
        placeOfResidenceError.innerHTML = 'please fill in place of residence'
        placeOfResidenceError.style = 'color:red; font-size:10px;'
        return false;
    }else{
        placeOfResidence.style.border = "1px solid green"
        placeOfResidenceError.innerHTML = '';
    }

    //Nin validation
    if (!(Nin.value.length == 11)) {
        NinError.innerHTML = ' National ID have 11 Characters';
        Nin.style.border = "1px solid red"
        NinError.style ='color:red; font-size:10px;'
        return false;
    } else if (Nin.value.length == 11 && Nin.value.match(NinReg)) {
        NinError.innerHTML = '';
        Nin.style.border = "1px solid green"
    } else if (!(Nin.value.length == 11 && Nin.value.match(NinReg))) {
        NinError.innerHTML = 'Starts with 3 Capital letters then 8 other charcters ';
        Nin.style.border = "1px solid green"
        NinError.style = 'color:red; font-size:10px;'
        return false;
    } else if (Nin.value.length = 0) {
        NinError.innerHTML = '';

    }
    // if (Nin.value == '') {
    //     Nin.style.border = '1px solid red'
    //     NinError.innerHTML = 'please fill in Nin number'
    //     NinError.style = 'color:red; font-size:10px;'
    //     return false;
    // }

    //Gender validation
    if (Gender.value == '') {
        Gender.style.border = '1px solid red'
        GenderError.innerHTML = 'please fill in gender'
        GenderError.style = 'color:red; font-size:10px;'
        return false;
    }else{
        Gender.style.border = "1px solid green"
        GenderError.innerHTML = '';
    }

    //Employee type validation
    if (employeeType.value == '') {
        employeeType.style.border = '1px solid red'
        employeeTypeError.innerHTML = 'please fill in employee type'
        employeeTypeError.style = 'color:red; font-size:10px;'
        return false;
    }else{
        employeeType.style.border = "1px solid green"
        employeeTypeError.innerHTML = '';
    }

    
    




}