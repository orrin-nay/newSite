signUp = false;
function loginOnload() {
    var a = document.getElementById("signupOrLoginButton");
    document.getElementById("loginOrSignupForm").onsubmit = function () {
        fail = false;
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("loginOrSignupEmailField").value))) {
            if (document.getElementById("loginOrSignupEmailErrorContainer").childNodes.length == 0) {
                var errorMsg = document.createElement("p");
                errorMsg.innerHTML = "Inavlid email.";
                errorMsg.id = "loginOrSignupEmailErrorText"
                document.getElementById("loginOrSignupEmailErrorContainer").appendChild(errorMsg);
            }
            fail = true;
        } else if (document.getElementById("loginOrSignupEmailErrorContainer").childNodes.length > 0) {
            document.getElementById("loginOrSignupEmailErrorContainer").removeChild(document.getElementById("loginOrSignupEmailErrorText"));
        }
        if (document.getElementById("loginOrSignupPasswordField").value == "") {
            if (document.getElementById("loginOrSignupPasswordErrorContainer").childNodes.length == 0) {
                var errorMsg = document.createElement("p");
                errorMsg.innerHTML = "Please enter a password.";
                errorMsg.id = "loginOrSignupPasswordErrorText"
                document.getElementById("loginOrSignupPasswordErrorContainer").appendChild(errorMsg);

            } else if (document.getElementById("loginOrSignupPasswordErrorText").innerHTML != "Please enter a password.") {
                document.getElementById("loginOrSignupPasswordErrorText").innerHTML = "Please enter a password."
            }
            fail = true;
        } else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/.test(document.getElementById("loginOrSignupPasswordField").value)) {
            if (document.getElementById("loginOrSignupPasswordErrorContainer").childNodes.length == 0) {
                var errorMsg = document.createElement("p");
                errorMsg.innerHTML = "Password must have a uper and lower case letter, number, special character, and be at least 8 characters long.";
                errorMsg.id = "loginOrSignupPasswordErrorText"
                document.getElementById("loginOrSignupPasswordErrorContainer").appendChild(errorMsg);

            } else if (document.getElementById("loginOrSignupPasswordErrorText").innerHTML != "Password must have a uper and lower case letter, number, special character, and be 8 characters long.") {
                document.getElementById("loginOrSignupPasswordErrorText").innerHTML = "Password must have a uper and lower case letter, number, special character, and be 8 characters long."
            }
            fail = true;
        } else if (signUp && document.getElementById("repeatPasswordInput").value != document.getElementById("loginOrSignupPasswordField").value) {

            if (document.getElementById("loginOrSignupPasswordErrorContainer").childNodes.length == 0) {
                var errorMsg = document.createElement("p");
                errorMsg.innerHTML = "Passwords don't match.";
                errorMsg.id = "loginOrSignupPasswordErrorText"
                document.getElementById("loginOrSignupPasswordErrorContainer").appendChild(errorMsg);
            } else if (document.getElementById("loginOrSignupPasswordErrorText").innerHTML != "Passwords don't match.") {
                document.getElementById("loginOrSignupPasswordErrorText").innerHTML = "Passwords don't match.";
            }
            fail = true;
        } else if (document.getElementById("loginOrSignupPasswordErrorContainer").childNodes.length > 0) {
            document.getElementById("loginOrSignupPasswordErrorContainer").removeChild(document.getElementById("loginOrSignupPasswordErrorText"));
        }
        if (fail) {
            return false;
        }
        if (signUp) {
            if (document.getElementById("repeatPasswordInput").value == document.getElementById("loginOrSignupPasswordField").value) {
                sighnUP();
            } else {
            }
        }
        else{
            login();
        }
        return false;
    };
    a.onclick = function () {
        if (signUp) {
            document.getElementById("sumbitButton").value = "Login";
            document.getElementById("repeatPasswordContainer").removeChild(document.getElementById("repeatPasswordInput"));
            a.innerHTML = "Sign Up";
            signUp = false;
        } else {
            var repeatPassword = document.createElement("input");
            repeatPassword.placeholder = "repeat password";
            repeatPassword.name = "repeatPassword";
            repeatPassword.type = "password";
            repeatPassword.id = "repeatPasswordInput";
            document.getElementById("repeatPasswordContainer").appendChild(repeatPassword);
            document.getElementById("sumbitButton").value = "Sign Up";
            a.innerHTML = "Login";
            signUp = true;
        }
        return false;
    };
}
function sighnUP() {
    $.post("userhandlers/signuphandler.php", {email: document.getElementById("loginOrSignupEmailField").value, password: document.getElementById("loginOrSignupPasswordField").value})
            .done(function (data) {
                if (data == "1") {
                    if (document.getElementById("loginOrSignupEmailErrorContainer").childNodes.length == 0) {
                        var errorMsg = document.createElement("p");
                        errorMsg.innerHTML = "Email already in use.";
                        errorMsg.id = "loginOrSignupEmailErrorText"
                        document.getElementById("loginOrSignupEmailErrorContainer").appendChild(errorMsg);
                    } else {
                        document.getElementById("loginOrSignupEmailErrorText").innerHTML = "Email already in use.";
                    }
                } else if (data == "0") {
                    window.location.href = 'dashboard.php';
                }
            });
}
function login(){
        $.post("userhandlers/loginhandler.php", {email: document.getElementById("loginOrSignupEmailField").value, password: document.getElementById("loginOrSignupPasswordField").value})
            .done(function (data) {
                if (data == "1") {
                    if (document.getElementById("loginOrSignupEmailErrorContainer").childNodes.length == 0) {
                        var errorMsg = document.createElement("p");
                        errorMsg.innerHTML = "Email or passowrd incorrect.";
                        errorMsg.id = "loginOrSignupEmailErrorText"
                        document.getElementById("loginOrSignupEmailErrorContainer").appendChild(errorMsg);
                    } else {
                        document.getElementById("loginOrSignupEmailErrorText").innerHTML = "Email or password incorrect.";
                    }
                } else if (data == "0") {
                    window.location.href = 'dashboard.php';
                }
            });
}