// function validatePhone(phone) {
//     return /^\d{10}$/.test(phone);
// }

// function validateCardNumber(cardNumber) {
//     return /^\d{16}$/.test(cardNumber);
// }

// function validateCVV(cvv) {
//     return /^\d{3}$/.test(cvv);
// }

// document.getElementById('checkoutForm').addEventListener('submit', function(event) {
//     const phone = document.getElementById('phone').value;
//     const phoneError = document.getElementById('phoneError');

//     const cardNumber = document.getElementById('cardNumber').value;
//     const cardNumberError = document.getElementById('cardNumberError');

//     const cvv = document.getElementById('cvv').value;
//     const cvvError = document.getElementById('cvvError');

//     let valid = true;

//     if (!validatePhone(phone)) {
//         phoneError.textContent = "Phone number must be 10 digits";
//         valid = false;
//     } else {
//         phoneError.textContent = "";
//     }

//     if (!validateCardNumber(cardNumber)) {
//         cardNumberError.textContent = "Card number must be 16 digits";
//         valid = false;
//     } else {
//         cardNumberError.textContent = "";
//     }

//     if (!validateCVV(cvv)) {
//         cvvError.textContent = "CVV number must be 3 digits";
//         valid = false;
//     } else {
//         cvvError.textContent = "";
//     }

//     if (!valid) {
//         event.preventDefault();
//     }
// })

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