console.log("learning API");

window.onload = function () {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "7a40d8f461msh79f4f411e8e3ab7p1e0a92jsnd87ad8dc4b57",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((jsondata) => {
      console.log(jsondata);
      let music = jsondata.data;

      for (let i = 0; i < music.length; i++) {
        let single_data = music[i];
        let list = document.querySelector(".list-group");
        let listElement = document.createElement("li");
        listElement.className = "list-group-item";
        listElement.innerText = `${single_data.title}`;
        console.log(listElement);
        list.appendChild(listElement);
        // col.appendChild(list);
        // row.appendChild(col);
      }
    })

    .catch((err) => {
      console.error(err);
    });
};
