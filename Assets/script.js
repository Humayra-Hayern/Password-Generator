// Assignment Code: this code targets the generate id.
var generateBtn = document.querySelector("#generate");

// Defined the variables for the password.
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericalChar = "0123456789";
var specialChar = "!$%^&*+-";

// Added the generate password function, without this a password cannot be generated.
function generatePassword() {
  var password = "";
  var passwordChar = "";
  var passwordlength = prompt(
    "Create a password length between 8-128 characters."
  );
  passwordlength = parseInt(passwordlength);

  if (passwordlength < 8) {
    alert("Your password must have more than 7 characters");
    return "";
  }

  if (passwordlength > 128) {
    alert("Your password must not have more than 128 characters");
    return "";
  }

  var lowercaseCharacters = confirm(
    "Would you like to add lowercase characters to your password?"
  );

  if (lowercaseCharacters) {
    passwordChar += lowercaseChar;
  }

  var uppercaseCharacters = confirm(
    "Would you like to add uppercase characters to your password?"
  );

  if (uppercaseCharacters) {
    passwordChar += uppercaseChar;
  }

  var numericalCharacters = confirm(
    "Would you like to add numbers to your password?"
  );

  if (numericalCharacters) {
    passwordChar += numericalChar;

    var specialCharacters = confirm(
      "Would you like to add special characters to your password?"
    );
  }

  if (specialCharacters) {
    passwordChar += specialChar;
  }

  for (var i = 0; i < passwordlength; i++) {
    password += passwordChar[Math.floor(Math.random() * passwordChar.length)];
  }

  return password;
}

// Write password to the #password input, this code then targets the password id.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// When the User clicks the 'generate password' button, it calls the 'write password' function.
generateBtn.addEventListener("click", writePassword);
