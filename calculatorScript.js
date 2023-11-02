
const currentUser = localStorage.getItem('currentUser'); 

$(".heading").text(currentUser);

function validateField(input, errorElement) {
    const value = input.val();
    if (value === "") {
        errorElement.text("This field is required.");
        input.addClass("is-invalid");
        return false;
    }
    if (!/^\d*\.?\d*$/.test(value)) {
        errorElement.text("Only numbers are allowed.");
        input.addClass("is-invalid");
        return false;
    }
    errorElement.text("");
    input.removeClass("is-invalid");
    return true;
}


const performOperation = (operator) => {
    const num1 = parseFloat($("#Number1").val());
    const num2 = parseFloat($("#Number2").val());

    if (isNaN(num1) || isNaN(num2)) {
        $("#result").val("Error: Invalid Input");
    } else {
        switch (operator) {
            case "add":
                $("#result").val(num1 + num2);
                break;
            case "subtract":
                $("#result").val(num1 - num2);
                break;
            case "multiply":
                $("#result").val(num1 * num2);
                break;
            case "divide":
                if (num2 === 0) {
                    $("#result").val("Error: Division by zero");
                } else {
                    $("#result").val(num1 / num2);
                }
                break;
            default:
                $("#result").val("Invalid Operator");
        }
    }
};


$("#buttons button").click(function () {
    const operator = $(this).attr("id");
    performOperation(operator);
});


$("#Number1, #Number2").on("input", function () {
    const input = $(this);
    const errorElement = $(`#${input.attr("id")}-error`);
    validateField(input, errorElement);
});