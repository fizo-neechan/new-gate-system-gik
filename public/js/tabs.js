document.getElementById('DailyLog').style.display = 'block';

function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}