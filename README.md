# sign-up-form
This is my first form. It is a ‘Sign-up form’ for an imaginary service.

This HTML form is designed to collect user registration information, validate it, and submit it to a server-side script for processing (at the moment the data is not being sent anywhere, later in the curriculum, we will learn to hook backend systems up to frontend forms). The form includes various validation checks to ensure that the entered data meets certain criteria, such as minimum length, required fields, and pattern constraints.

  1.	User Information Fields:
        •	First Name: An input field for the user's first name. It is required (required attribute) and must contain at least 3 characters but no more than 30 characters. The pattern attribute enforces that only alphabetic characters are allowed.
        •	Last Name: Similar to the first name field, an input field for the user's last name with the same requirements.

  2.	Contact Information Fields:
        •	Email: An input field for the user's email address. It is required and must be a valid email address format.
        •	Phone Number: An optional input field for the user's phone number. It allows only numeric characters and enforces a minimum length of 7 and a maximum length of 10 characters.

  3.	Password Fields:
        •	Password: An input field for the user's password. It is required and must be at least 8 characters long.
        •	Confirm Password: An input field to confirm the user's password. It is also required and must match the password field to ensure the user enters the same password twice.

  4.	Error Messages: Each field has an associated <span> element with the class "validation". Additionally, there are <div> elements with the class "error" for displaying password-related error messages.
  The error messages for password matching are displayed in a <div> element with the ID "pwd-error" when the passwords entered by the user do not match. For other types of fields (text, email, and telephone), validation is performed by changing the border color of the input fields to green for valid input and red for invalid input, providing real-time feedback to the user. JavaScript logic is used.

  5.	Submit Button: A "Create Account" button is provided to submit the form data.

  6.	Log In Link: Below the submit button, there is a link for users who already have an account to log in. The link is currently a placeholder with a "#" as its href value.

  The associated CSS code provides consistent styling for various input field types, including setting their width, border, padding, and margin. It also adds visual feedback by changing the border color and applying a box shadow when an input field is focused, making it clear which input field the user is interacting with. Additionally, it removes the default browser outline on focus to maintain a clean and consistent appearance.

