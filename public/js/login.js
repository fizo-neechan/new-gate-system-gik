const loginForm = document.getElementById("login__form");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const username = document.getElementById("un").value;
  const password = document.getElementById("pw").value;

  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json();
    if (!data.error) window.location.href = "/";
    else {
      const errorDiv = document.querySelector(".login-text");
      errorDiv.innerHTML = `${data.error}`;
    }
  } catch (err) {
    console.error(err);
  }
});
