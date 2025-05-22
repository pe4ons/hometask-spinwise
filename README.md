# Task 1: Based on requirements create 3 manual test cases

Test case 1

Title: Successful registration using a valid username, email, and password

Steps:
  1. Open `https://auth-home-task.vercel.app/`
  2. Click the `Go to Registration` button
  3. Enter a valid username "username987" for the `Username` input field
  4. Enter a valid email address "email@email.com" for the `Email` input field
  5. Enter a valid password "secretPassword4" for the `Password` input field
  7. Re-enter the same password for the `Confirm Password` input field
  8. Click the `Register` button 

Expected result:
  1. User is redirected to the Home Page
  2. Success message is displayed: "You have registered successfully!"

Actual result: As expected

---

Test case 2

Title: Username can't be less than 3 characters

Steps:
  1. Open `https://auth-home-task.vercel.app/`
  2. Click the `Go to Registration` button
  3. Enter "aa" for the `Username` input field
  4. Click the `Register` button 

Expected result:
  1. An error message is displayed below the Username input field
  2. Form is not submitted

Actual result: As expected

---

Test case 3

Title: Password and confirm password input fields don't match

Steps:
  1. Open `https://auth-home-task.vercel.app/`
  2. Click the `Go to Registration` button
  3. Enter a valid password "secretPassword1" for the `Password` input field
  4. Enter a mismatching password "secretPassword2" for the `Confirm Password` input field
  5. Click the `Register` button 

Expected result: 
  1. An error message is displayed below the Confirm Password input field
  2. Form is not submitted

Actual result: As expected

# Task 2: Report at least 1 Bug You have found during the testing

Bug ID: 1

Title: Input fields are not highlighted when validation fails.

Env:
  1. OS: Windows 11
  2. Browser: Version 1.78.102 Chromium: 136.0.7103.113 (Official Build) (64-bit)

Steps to reproduce:
  1. Open `https://auth-home-task.vercel.app/`
  2. Click the `Go to Registration` button
  3. Enter any text for the `Confirm Password` input field
  4. Click the `Register` button

Expected result: Input fields are highlighted

Actual result: Input fields are not highlighted

<img src="https://github.com/user-attachments/assets/721dce75-59a9-4a25-b5fd-f79b2f34f537">

---

Bug ID: 2

Title: Input fields have a incorrect texts displayed when input validation fails

Env:
  1. OS: Windows 11
  2. Browser: Version 1.78.102 Chromium: 136.0.7103.113 (Official Build) (64-bit)

Steps to reproduce:
  1. Open `https://auth-home-task.vercel.app/`
  2. Click the `Go to Registration` button
  3. Enter any text for the `Confirm Password` input field
  4. Click the `Register` button

Expected result: 
  1. Username input error text should be: "Must be between 3 and 20 characters. Only alphanumeric characters (letters and numbers) are allowed."
  2. Email input error text should be: "Must be a valid email format (e.g., example@domain.com)."
  3. Password input error text should be: "Must be at least 8 characters long. Must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number."
  4. Confirm password input error text should be: "Must match the value entered in the Password field."

Actual result:
  1. Username input error text is displayed as: "Username must be 3-20 alphanumeric characters."
  2. Email input error text is displayed as: "Invalid email format."
  3. Password input error text is displayed as: "Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number."
  4. Confirm password input error text is displayed as: "Passwords do not match."

<img src="https://github.com/user-attachments/assets/721dce75-59a9-4a25-b5fd-f79b2f34f537">

---

Bug ID: 3

Title: Browser email validation blocks other input field errors when clicking the register button

Env:
  1. OS: Windows 11
  2. Browser: Version 1.78.102 Chromium: 136.0.7103.113 (Official Build) (64-bit)

Steps to reproduce:
  1. Open `https://auth-home-task.vercel.app/`
  2. Click the `Go to Registration` button
  3. Enter "aaa" text for the `Email` input field
  4. Enter "s" text for the `Username` intpu field
  5. Click the `Register` button

Expected result: After the Register button is clicked, validation error messages should be displayed for all invalid fields.

Actual result: Until Email field is resolved user won't see other validation error messages.

<img src="https://github.com/user-attachments/assets/4a5af71c-ccc7-42a6-bb8e-e04851ce5ddd" width="450" height="450">

Video:

https://github.com/user-attachments/assets/268eb395-b023-4fc3-842d-2d81b50d2ade

# Task 3: Based on requirements automate 1 manual test case using playwright

  1. Using `pnpm` for the project. `pnpm` can be installed using `npm` https://pnpm.io/installation#using-npm
  2. Run `pnpm install`.
  3. Setup `.env` file (check `.env.example`) 
  4. To run test `pnpm exec playwright test registerPage --headed`.

# Task 4: Add points to improve form's UI/UX
Suggested improvments:
  1. Add an option to "Show Password" for the Password and Confirm Password fields.
  2. Using Lighthouse to check "Accessibility" form input fields are missing the `aria-label` attribute.
  3. Provide real time feedback on input validations, displaying or hiding error messages as the user types, to eliminate the need for clicking 'Register' to see feedback.
# Task 5: Anything You would improve/specify more in the existing requirements
  1. The `Field Validations:` section from the requirements could be more specific. For example, "Field Validations error texts" would clearly communicate that these are expected texts that should be displayed in case of an error.
# Task 6: What else can be tested?
  1. Could do performance testing. For example, do some load testing to check how the page operates under the expected amount of users.
  2. Usful to also test how the page works on a mobile device. Is the autofill correctly suggested? How form reacts to different screen sizes and to horizontal screen orientation.
  3. Check if the page is working on most popular browsers.
  4. From a security standpoint its important to check if inputs are sanitized to avoid cross-site scripting attacks.
