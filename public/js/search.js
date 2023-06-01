function makeSearchResult(img, name, designation, id){

    card = document.createElement('card')
    card.innerHTML = `
      <div class="search__result">
        <div class="search__img">
          <img
            src="assets/imgs/giki-logo-updated.png"
            alt="user profile picture"
          />
        </div>
        <ul class="search__details">
          <li class="search__field">${name}</li>
          <li class="search__field">${designation}</li>
          <li class="search__field">${id}</li>
        </ul>
      </div>
    `

    return card;
}


function renderSearchItem(img, name, designation, id){
    const search_container = document.getElementById('search__container');
    result = makeSearchResult(img, name, designation, id);
    search_container.appendChild(result);
}



const searchBar = document.getElementsByClassName("search-bar-main")[0];
console.log(searchBar);
console.log("here");
searchBar.addEventListener("keyup", async(e) => {
    const key = e.target.value;
    document.getElementById('search__container').innerHTML = "";
    
    try {
        const resp = await fetch(`/api/search/${key}`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        });

        const data = await resp.json();
        console.log(data);
        data.forEach(i => {
            renderSearchItem(i.id, i.id, i.name, i.designation);
        });
    } catch (err) {
        console.log(err);
    }
})