var barcode = "";

async function toggleInout(barcode) {

    const inOutSwitch = document.querySelector("#in-out-switch input");

    try {
        const regNo = barcode;
        const status = inOutSwitch.checked ? "IN" : "OUT";

        const respose = await fetch(`/api/dailylog`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            regNo,
            status,
          }),
        }).then((res) => res.json());

        if (respose.msg) {
            console.log(respose.msg);
        }
    } catch (err) {
        console.log(err);
    }
}


document.body.addEventListener("keydown",function(e){
    if(e.code == 'Enter'){
        if(barcode.length == 7){
            console.log(barcode);
            toggleInout(barcode);
            barcode = "";
            dailyLogBtn.click();
        } else {
            console.log(barcode);
        }
    } else {
        if(e.key == '1' || e.key == "2" || e.key == "3" || e.key == "4" || e.key == '5' || e.key == "6" || e.key == "7" || e.key == "8" || e.key == '9' || e.key == '0'){
            barcode += e.key;
        }
    }
}, true)