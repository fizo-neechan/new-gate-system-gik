

function getAddVisitorModal(){
    const visitorModal = document.createElement("div");
    visitorModal.classList.add("modal");
    visitorModal.classList.add("addvisitor-panel");
  
    visitorModal.innerHTML = `
      <div class = "modal__content">
      <form class = "adduser" action="/" id="adduser">
      <div class="upper">
        <h2>Enter new user</h2>
        <img id="adduser-pic" src="assets/imgs/giki-logo-updated.png" width="200">
      </div>
      <div class = "modal-flex">
        <input type="text" name="name" placeholder="Name" pattern="[A-Za-z\s]+" title="Only letters and spaces are allowed" required autofocus> 
      </div>
      <div class = "modal-flex">
        <input type="text" name="cnic" placeholder="CNIC" pattern="\d{13}" title="only 13 digits allowed" required>
      </div>
      <div class = "modal-flex">
        <input type="text" name="vehicle_no" placeholder="Vehicle Number" pattern="[A-Za-z]{3}[\d]{3}" title="Only Number plate allowed eg:AAA001 or ZZZ999">
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

    const modalContent = visitorModal.getElementsByClassName("modal__btns")[0];
    modalContent.appendChild(modalBtn);

    return visitorModal;
}




const addVisitorBtn = document.getElementById("add__visitor");
addVisitorBtn.addEventListener("click", () => {
    const visitorModal = getAddVisitorModal();
    visitorModal.classList.add("show");
    document.body.appendChild(visitorModal);
})