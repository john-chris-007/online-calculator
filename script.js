// Select the display input field
const display = document.querySelector("input[name='display']");

// Function to clear the display
function clearDisplay() {
    display.value = "";
}

// Function to delete the last character from the display
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to append a value to the display
function appendValue(value) {
    display.value += value;
}

// Function to evaluate the expression
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error"; // Handle invalid input
    }
}

// Attach event listeners to buttons dynamically
document.querySelectorAll("input[type='button']").forEach(button => {
    const value = button.value;

    button.addEventListener("click", () => {
        if (value === "AC") {
            clearDisplay();
        } else if (value === "DEL") {
            deleteLast();
        } else if (value === "=") {
            calculateResult();
        } else {
            appendValue(value);
        }
    });
}