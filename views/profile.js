


function show_profile(reg){
    card = `
    <div class="container">
    <ul class="tabs">
      <li class="active" id="profileTab" data-content="profile">Add User</li>
    </ul>
    <div class="content">
      <div class="profile visible">
        <h3>Add Information</h3>
        <form action="" class="modifyInfo">
          <table>
            <tr>
              <td class="title">Name :</td>
              <td><input type="text" name="name" /></td>
            </tr>
            <tr>
              <td class="title">Registration Number :</td>
              <td><input type="text" name="lastName" /></td>
            </tr>
            <tr>
              <td class="title">Father Name :</td>
              <td><input type="date" name="dateBirth" /></td>
            </tr>
            <tr>
              <td class="title">CNIC :</td>
              <td><input type="text" name="city" /></td>
            </tr>
            <tr>
              <td class="title">Designation :</td>
              <td><input type="text" name="phone" /></td>
            </tr>
            <tr>
              <td class="title">Date of Birth :</td>
              <td><input type="email" name="email" /></td>
            </tr>
            <tr>
              <td class="title">Permanent Address :</td>
              <td><input type="email" name="email" /></td>
            </tr>
            <tr>
              <td class="title">Contact Number :</td>
              <td><input type="email" name="email" /></td>
            </tr>
            <tr>
              <td class="title">Emergency Contact Name :</td>
              <td><input type="email" name="email" /></td>
            </tr>
            <tr>
              <td class="title">Emergency Contact Number :</td>
              <td><input type="email" name="email" /></td>
            </tr>
            <tr>
              <td class="title">Identification Mark :</td>
              <td><input type="email" name="email" /></td>
            </tr>
            <tr>
              <td class="title">Blood Group :</td>
              <td><input type="email" name="email" /></td>
            </tr>
            <tr>
              <td class="title">Vehicle Number :</td>
              <td><input type="email" name="email" /></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="submit" value="Add" class="primary" />
                <input type="reset" value="Cancel" class="secondary" />
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  </div>
    `;
    document.querySelector('main').innerHTML = card;
}