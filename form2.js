// Signup
document.querySelector(".signup form").addEventListener("submit", function (e) {
  if (!e.target.checkValidity()) {
    e.preventDefault();
    alert("Please fill all the fields first");
    return;
  }

  e.preventDefault(); // stop form submission

  const email = e.target.elements.email.value;
  const password = e.target.elements.pswd.value;

  // Save credentials to localStorage
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  window.location.replace("./signup-success/index.html");
});

// Login
document.querySelector(".login form").addEventListener("submit", function (e) {
  if (!e.target.checkValidity()) {
    e.preventDefault();
    alert("Please fill all the fields first");
    return;
  }

  e.preventDefault(); // stop form submission

  const email = e.target.elements.email.value;
  const password = e.target.elements.pswd.value;

  const savedEmail = localStorage.getItem("email");
  const savedPassword = localStorage.getItem("password");

  if (email === savedEmail && password === savedPassword) {
    window.open("./login-success/index.html", "_blank");
  } else {
    alert("Email or password is incorrect");
  }
});
