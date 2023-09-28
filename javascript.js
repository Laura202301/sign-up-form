const password = document.getElementById("pwd");
const confirmPassword = document.getElementById("confirm-pwd");
const passwordError = document.getElementById("pwd-error");

let confirmPasswordEntered = false; //Variable to control whether password confirmation has been entered

password.addEventListener("input", () => {
  if (confirmPasswordEntered && password.value !== confirmPassword.value) {
    passwordError.textContent = "Passwords do not match, please try again.";
  } else {
    passwordError.textContent = "";
  }
});

confirmPassword.addEventListener("input", () => {
  confirmPasswordEntered = true; // The password confirmation has been entered
  if (password.value !== confirmPassword.value) {
    passwordError.textContent = "Passwords do not match, please try again.";
  } else {
    passwordError.textContent = "";
  }
});

// Select all input fields
const inputFields = document.querySelectorAll('input[type="text"], input[type="tel"], input[type="email"], input[type="password"]');

// Add an input event to each field
inputFields.forEach((input) => {
  input.addEventListener('input', function () {
    const value = this.value;

    // Specific validation for email field
    if (this.type === 'email') {
      if (/^\S+@\S+\.\S+$/.test(value)) {
        this.style.borderColor = 'green'; 
      } else {
        this.style.borderColor = 'red'; 
      }
    }
    // Specific validation for password fields
    else if (this.type === 'password') {
      if (value.length >= 8) {
        this.style.borderColor = 'green'; 
      } else {
        this.style.borderColor = 'red'; 
      }
    }
    // // Specific validation for tel field
    else if (this.type === 'tel') {
      if (/^[0-9]{7,10}$/.test(value)) {
        this.style.borderColor = 'green';
      } else {
        this.style.borderColor = 'red'; 
      }
    }
    // Specific validation for text fields with required pattern
    else if (this.hasAttribute('pattern') && this.hasAttribute('required')) {
      if (new RegExp(this.getAttribute('pattern')).test(value)) {
        this.style.borderColor = 'green';
      } else {
        this.style.borderColor = 'red'; 
      }
    }
    // Validation by text length for other fields
    else {
      if (value.length >= this.minLength && value.length <= this.maxLength) {
        this.style.borderColor = 'green'; 
      } else {
        this.style.borderColor = 'red'; 
      }
    }
  });
});
