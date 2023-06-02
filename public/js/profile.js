
function makeDetailsModal(details) {
    const profileModal = document.createElement("div");
    profileModal.classList.add("modal");

    profileModal.innerHTML = `
    <div class = "modal__content">
      <div class="upper">
        <h2>Details</h2>
        <img src="assets/imgs/giki-logo-updated.png" alt="profile picture">
        <p style="font-size: 25px; padding: 2rem; font-weight: 400;">Profile</p>
      </div>
      <div class = "modal-flex">
        <div class = "left">
          <p>Name:</p>
        </div>
        <div class = "right">
          <p>${details.name}</p>
        </div>
      </div>
      <div class = "modal-flex">
        <div class = "left">
          <p>Father's name:</p>
        </div>
        <div class = "right">
          <p>${details.fathername}</p>
        </div>
      </div>
      <div class = "modal-flex">
        <div class = "left">
          <p>Registration Num:</p>
        </div>
        <div class = "right">
          <p>${details.regno}</p>
        </div>
      </div>
      <div class = "modal-flex">
        <div class = "left">
          <p>CNIC:</p>
        </div>
        <div class = "right">
          <p>${details.nic}</p>
        </div>
      </div>
      <div class = "modal-flex">
        <div class = "left">
          <p>Faculty/Dept:</p>
        </div>
        <div class = "right">
          <p>${details.faculty_dept}</p>
        </div>
      </div>
      <div class = "modal-flex">
        <div class = "left">
          <p>DOB:</p>
        </div>
        <div class = "right">
          <p>${details.dob}</p>
        </div>
      </div>
      <div class = "modal-flex">
        <div class = "left">
          <p>Contact Number:</p>
        </div>
        <div class = "right">
          <p>${details.contact_number}</p>
        </div>
      </div>
      <div class = "modal-flex">
        <div class = "left">
          <p>Emergency Contact name:</p>
        </div>
        <div class = "right">
          <p>${details.emergencycontactname}</p>
        </div>
      </div>
      <div class = "modal-flex">
        <div class = "left">
          <p>Emergency Contact:</p>
        </div>
        <div class = "right">
          <p>${details.emergencycontactnumber}</p>
        </div>
      </div>
      <div class = "modal-flex">
        <div class = "left">
          <p>Blood group:</p>
        </div>
        <div class = "right">
          <p>${details.bloodgroup}</p>
        </div>
      </div>
    </div>
  `;

    const modalBtn = document.createElement("button");
    modalBtn.classList.add("modal-btn");
    modalBtn.innerHTML = "Okay";
    modalBtn.onclick = () => {
        profileModal.remove();
    }

    const modalContent = profileModal.getElementsByClassName('modal__content')[0];
    modalContent.appendChild(modalBtn);

  return profileModal;
}

async function displayDetailsModal(designation, id){

    try {
        console.log(`/api/search/${designation}/${id}`);
        const resp = await fetch(`/api/search/${designation}/${id}`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        });

        const data = await resp.json();
        if(!data){
            console.log("error len::0");
            return;
        } else {
            console.log(data);
            data.forEach(i => {
                const profileModal = makeDetailsModal(i);
                profileModal.classList.add("show");
                document.body.appendChild(profileModal);
            });
        }
    } catch (err) {
        console.log(err);
    }

}