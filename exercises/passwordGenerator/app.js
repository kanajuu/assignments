let passGenerator = function (passLength) {
  let newPassword = '';
  let m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=";
  for (let i = 0; i <= passLength; i++) {
    newPassword += m.charAt(Math.random() * m.length);
  }
  return newPassword;
};