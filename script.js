function showRegister() {
  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("registerBox").classList.remove("hidden");
}

function showLogin() {
  document.getElementById("registerBox").classList.add("hidden");
  document.getElementById("loginBox").classList.remove("hidden");
}

document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  alert("Account created successfully! 🎉");

  showLogin();
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (username === savedUsername && password === savedPassword) {
    alert("Login successful! 🎉");
  } else {
    alert("Incorrect username or password ❌");
  }
});
