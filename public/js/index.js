const table = document.querySelector(".log__table");

const getLog = async function () {
  try {
    const resp = await fetch(`/api/dailylog`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await resp.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

const createHtml = function (data) {
  const html = `
  <ul class="log__row">
  <li class="log__field">${data.regno}</li>
  <li class="log__field">${data.name}</li>
  <li class="log__field">${data.Time}</li>
  <li class="log__field">
  <p class="log__field--status">${data.flag}</p>
  </li>
  </ul>
  `;

  return html;
};

const renderHtml = function (html) {};

const initData = async function () {
  const data = await getLog();
  // console.log(data);

  data.forEach((el) => {
    const html = createHtml(el);
    table.insertAdjacentHTML("beforeend", html);
  });
};

initData();
