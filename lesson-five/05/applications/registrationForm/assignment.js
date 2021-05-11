function saveUser() {
    // retrieve data
    let username = registrationForm.username.value;
    let password = registrationForm.password.value;
    let confirmPassword = registrationForm.confirmPassword.value;

    let errorThrown = false;

    // display error message if any fields are missing
    if (username === "" || password === "" || confirmPassword === "") {
        errorThrown = true;
        // create error message 
        let errorParagraph = document.createElement("P");
        let errorText = document.createTextNode("Required");
        errorParagraph.append(errorText);
        errorParagraph.style.color = "red";

        if (username === "") {
            document.getElementById("username").appendChild(errorParagraph);
        }
        if (password === "") {
            document.getElementById("password").appendChild(errorParagraph);
        }
        if (confirmPassword === "") {
            document.getElementById("confirmPassword").appendChild(errorParagraph);
        }
        return;
    }

    
    if (password === confirmPassword) { // display success message if all went well
        
        // create success message 
        let successParagraph = document.createElement("P");
        let errorText = document.createTextNode("User successfully saved.");
        successParagraph.append(errorText);
        successParagraph.style.color = "green";

        document.getElementById("submit").appendChild(successParagraph);
        
    } else { // display error message if passwords don't match
        // create error message 
        let errorParagraph = document.createElement("P");
        let errorText = document.createTextNode("Passwords must match");
        errorParagraph.append(errorText);
        errorParagraph.style.color = "red";
        document.getElementById("confirmPassword").appendChild(errorParagraph);
    }


    


}