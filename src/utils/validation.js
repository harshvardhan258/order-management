function isValidEmail(email) {
  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPassword(password) {
  // Password must be at least 8 characters long
  return password.length >= 8;
}

export { isValidEmail, isValidPassword };
