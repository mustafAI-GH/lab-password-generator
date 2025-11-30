function generatePassword(length) {

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  let password = "";

  for (let i = 0; i < length; i++) {

    let randomIndex = Math.floor(Math.random() * chars.length);

    password += chars[randomIndex];
  }
  return password;
}

let password = generatePassword(9);

console.log("Generated password: " + password);
