function validateInput(input) {
    const errorSpan = input.nextElementSibling;

    if (input.checkValidity()) {
        errorSpan.textContent = "";
    } else {
        errorSpan.textContent = input.validationMessage || "Invalid Input";
    }
}

document.querySelectorAll('input').forEach(function(input) {
    input.addEventListener('input', function() {
        validateInput(input)
    })
})

document.getElementById('checkoutForm').addEventListener('submit', function(event) {
    let valid = true;

    document.querySelectorAll('input').forEach(function(input) {
        validateInput(input);

        if(!input.checkValidity()) {
            valid = false;
        }
    })

    if (!valid) {
        event.preventDefault('');
        alert('Form is not valid');
    }
})


if (!Element.prototype.closest) {
    Element.prototype.closest = function(selector) {
        let element = this;

        while (element && element.nodeType === 1) {
            if (element.matches(selector)) return element
            element = element.parentElement || element.parentNode
        }

        return null;
    }
}