

function getAddVisitorModal(){
    const visitorModal = document.createElement("div");
    visitorModal.classList.add("modal");
    visitorModal.classList.add("addvisitor-panel");
  
    visitorModal.innerHTML = `
      <div class = "modal__content">
      <form class = "adduser" action="/" id="addvisitor">
      <div class="upper">
        <h2>Enter new user</h2>
        <img id="adduser-pic" src="assets/imgs/giki-logo-updated.png" width="200">
      </div>
      <div class = "modal-flex">
        <input type="text" name="name" placeholder="Name" pattern="[A-Za-z\s]+" title="Only letters and spaces are allowed" required autofocus> 
      </div>
      <div class = "modal-flex">
        <input type="text" name="cnic" placeholder="CNIC" maxlength='13' title="only 13 digits allowed" required>
      </div>
      <div class = "modal-flex">
        <input type="text" name="vehicle_no" placeholder="Vehicle Number"  title="Only Number plate allowed eg:AAA001 or ZZZ999">
      </div>
      <div class="modal__btns" style="margin: 2rem 0 1rem; flex-direction: row-reverse;">
        <button type="submit" class="adduser-submitbtn">
        Add Visitor
        </button>
      </div>
    </form>
      </div>
    `;

    const modalBtn = document.createElement("button");
    modalBtn.classList.add("modal-btn");
    modalBtn.innerHTML = "Close";
    modalBtn.onclick = () => {
        visitorModal.remove();
    };


    function validateVisitorForm() {
      const inputs = document.querySelectorAll("#addvisitor input");
      for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].checkValidity()) {
          return false; // prevent form submission
        }
      }
      return true; // allow form submission
    }

    const modalContent = visitorModal.getElementsByClassName("modal__btns")[0];
    modalContent.appendChild(modalBtn);

    const visitorForm = visitorModal.getElementsByClassName("adduser")[0];
    // console.log(visitorForm);
    visitorForm.addEventListener("submit", async (event) => {
      console.log("a");
      event.preventDefault();
      if (validateVisitorForm()) {
        const inputs = document.querySelectorAll("#addvisitor input");
        const data = {};

        inputs.forEach((input) => {
          const name = input.name;
          const value = input.value;
          data[name] = value;
        });

        try {
          console.log('b')
          const response = await fetch(`/api/visitorLog/add`, {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              data,
            }),
          }).then((res) => res.json());

          if (response.error) {
            console.log('e')
            const errorOverlay = document.getElementById("error");
            const errorContainer = document.getElementById("error__div");
            
            errorContainer.insertAdjacentHTML(
              "afterbegin",
              `<p>${response.error}</p>`
              );
              errorOverlay.style.display = "flex";
            } else {
            console.log('d')
            userForm.reset();
            modalBtn.click();
          }
        } catch (err) {
          console.log('f')
          console.error(err);
        }
      }
    });

    return visitorModal;
}




const addVisitorBtn = document.getElementById("add__visitor");
addVisitorBtn.addEventListener("click", () => {
    const visitorModal = getAddVisitorModal();
    visitorModal.classList.add("show");
    document.body.appendChild(visitorModal);
})