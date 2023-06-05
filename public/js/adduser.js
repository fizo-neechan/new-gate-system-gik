const userForm = document.getElementById("adduser");

function validateForm() {
  const inputs = document.querySelectorAll(".adduser-panel input");
  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].checkValidity()) {
      return false; // prevent form submission
    }
  }
  return true; // allow form submission
}

userForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (validateForm()) {
    const inputs = document.querySelectorAll(".adduser-panel input");
    const data = {};

    inputs.forEach((input) => {
      const name = input.name;
      const value = input.value;
      data[name] = value;
    });
    console.log(data);

    try {
      const response = await fetch(`/api/add_new_user`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          data,
        }),
      }).then((res) => res.json());

      console.log(response);

      if (response.error) {
        const errorOverlay = document.getElementById("error");
        const errorContainer = document.getElementById("error__div");

        errorContainer.insertAdjacentHTML(
          "afterbegin",
          `<p>${response.error}</p>`
        );
        errorOverlay.style.display = "flex";
      }
    } catch (err) {
      console.error(err);
    }
  }
});

const errorBtn = document.getElementById("error__accept");

errorBtn.addEventListener("click", () => {
  const errorOverlay = document.getElementById("error");
  const errorContainer = document.getElementById("error__div");
  const errorMsg = errorContainer.firstChild;

  errorOverlay.style.display = "none";
  if (errorMsg && errorMsg.nodeName === "P")
    errorContainer.removeChild(errorMsg);
});
