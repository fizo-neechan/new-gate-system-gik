function makeRow(id, name, time, flag) {
  const date = new Date(time);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const formattedDateTime = date.toLocaleString("en-US", options);

  const row = document.createElement("ul");
  row.classList.add("log__row");
  row.innerHTML = `
    <li class="log__field">${id}</li>
    <li class="log__field">${name}</li>
    <li class="log__field">${formattedDateTime}</li>
    <li class="log__field">
      <!-- <input class="cbx hidden" type="checkbox" id="unchecked" />
        <label class="lbl" for="unchecked"></label> -->
        ${
          flag === "OUT"
            ? `<p class="log__field--status out">${flag}</p>`
            : `<p class="log__field--status">${flag}</p>`
        }
      </li>
    `;

  return row;
}

const dailyLogBtn = document.getElementById("daily-log-btn");
console.log(dailyLogBtn.innerHTML);
dailyLogBtn.addEventListener("click", async () => {
  const table = document.querySelector("#DailyLog .log__table");
  try {
    const resp = await fetch(`/api/dailylog`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await resp.json();
    const users = table.querySelectorAll(":scope > ul");
    for (let i = 1; i < users.length; i++) {
      const child = users[i];
      table.removeChild(child);
    }

    console.log(data);
    data.forEach((i) => {
      table.appendChild(makeRow(i.id, i.name, i.time, i.flag));
    });
  } catch (err) {
    console.log(err);
  }
});

dailyLogBtn.click();

const visitorLogBtn = document.getElementById("visitor-log-btn");
visitorLogBtn.addEventListener("click", async () => {
  const table = document.querySelector("#VisitorLog .log__table");
  try {
    const resp = await fetch(`/api/visitorlog`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await resp.json();
    const users = table.querySelectorAll(":scope > ul");
    for (let i = 1; i < users.length; i++) {
      const child = users[i];
      table.removeChild(child);
    }

    console.log(data);
    data.forEach((i) => {
      table.appendChild(makeRow(i.id, i.name, i.Time, i.flag));
    });
  } catch (err) {
    console.log(err);
  }
});
