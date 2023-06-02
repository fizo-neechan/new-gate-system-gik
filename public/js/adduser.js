
function validateForm() {
    const inputs = document.querySelectorAll('.adduser-panel input');
    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].checkValidity()) {
        return false; // prevent form submission
      }
    }
    return true; // allow form submission
}


