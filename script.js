$(document).ready(function () {
    
    function validateEmail(email) {
        var regex = /^[a-zA-Z0-9._%+-]+@northeastern.edu$/;
        return regex.test(email);
    }

    
    function validateField(field, minLength, maxLength, specialCharRegex) {
        var value = field.val();
        if (value.length === 0) {
            field.addClass("is-invalid");
            return "This field is required.";
        }
        if (value.length < minLength || value.length > maxLength) {
            field.addClass("is-invalid");
            return "Length must be between " + minLength + " and " + maxLength + " characters.";
        }
        if (specialCharRegex && specialCharRegex.test(value)) {
            field.addClass("is-invalid");
            return "Special characters are not allowed.";
        }
        field.removeClass("is-invalid");
        return "";
    }

    
    $("#inputEmail3").on("input", function () {
        var error = validateField($(this), 1, 255, null);
        if (!validateEmail($(this).val())) {
            error = "Please enter a valid northeastern email address.";
        }
        $("#email-error").text(error);
        toggleRegisterButton();
    });

    
    $("#inputUsername3").on("input", function () {
        var error = validateField($(this), 1, 255, /[^a-zA-Z0-9._-]/);
        $("#username-error").text(error);
        toggleRegisterButton();
    });

    
    $("#inputPassword3").on("input", function () {
        var error = validateField($(this), 6, 50, null);
        $("#password-error").text(error);
        toggleRegisterButton();
    });

  
    $("#inputConfirmPassword3").on("input", function () {
        var password = $("#inputPassword3").val();
        var confirmPassword = $(this).val();
        var error = validateField($(this), 6, 50, null);
        if (password !== confirmPassword) {
            error = "Passwords do not match.";
        }
        $("#confirm-password-error").text(error);
        toggleRegisterButton();
    });

   
    function toggleRegisterButton() {
        var emailError = $("#email-error").text();
        var usernameError = $("#username-error").text();
        var passwordError = $("#password-error").text();
        var confirmPasswordError = $("#confirm-password-error").text();

        if (emailError === "" && usernameError === "" && passwordError === "" && confirmPasswordError === "") {
            $("#register-button").prop("disabled", false);
        } else {
            $("#register-button").prop("disabled", true);
        }
    }

    
    $("#registration-form").submit(function (e) {
        e.preventDefault();
        var currentUser = $("#inputUsername3").val();
        localStorage.setItem('currentUser', currentUser);
        window.location.href = "calculator.html";
    });
});