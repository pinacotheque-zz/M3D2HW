// HEART TOGGLE FUNCTIONS

// MOBILE SIDEBAR

/* Open when someone clicks on the span element */

/* Close when someone clicks on the "x" symbol inside the overlay */

console.log("learning API");

window.onload = function () {
  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "7a40d8f461msh79f4f411e8e3ab7p1e0a92jsnd87ad8dc4b57",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((albums) => {
      console.log(albums);
      const row = document.querySelector("jsonRow");

      for (let i = 0; i < albums.length; i++) {
        const album = albums[i];
        const col = document.createElement("div");
        col.classList.add("col-12", "col-md-3", "mb-3");

        const img = document.createElement("img");
        img.classList.add("img-fluid");
        img.src = album.cover;

        col.appendChild(img);
        row.appendChild(col);
      }
    })

    .catch((err) => {
      console.error(err);
    });
};
