/*Example 12 - User Input and Branching
Write a script that will ask for login using prompt and log result in browser console.

If the visitor enters "Admin", then prompt prompts for a password
If nothing is entered or the Esc key is pressed - print the line "Canceled"
Otherwise print the string "I don't know you"

Check password like this:

If the password is "I'm an admin", then output the string "Hello!"
Else output the string "Wrong password"*/

// tema

// for (let i = 0; i <= 10; i = i + 2) {
//   console.log(i);
// }

let user = prompt("Numele de utilizator: ");
const userIsAdmin = user === "Admin";

if (userIsAdmin) {
  let password = prompt("Introdu parola: ");
  const isPasswordCorect = password === "I'm an admin";
  if (isPasswordCorect) {
    console.log("Hello!");
  } else {
    console.log("Wrong password");
  }
} else if(user === null) {
  console.log("Canceled");
} else {
  console.log("I don't know you");
}