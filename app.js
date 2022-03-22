const api = "563492ad6f91700001000001c52d87070c5547f29ee36618e00d5e4f";
const gallery = document.querySelector(".gallery");
const searchInput = document.querySelector(".search-input");
const submitButton = document.querySelector(".submit-btn");
let searchValue;

// event listeners

submitButton.addEventListener("click", (e) => {
  searchPhotos(e);
});

// functions

async function curatedPhotos() {
  const dataFetch = await fetch(
    `https://api.pexels.com/v1/curated?per_page=15^page=1`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: api,
      },
    }
  );
  const data = await dataFetch.json();
  data.photos.forEach((photo) => {
    const galleryImg = document.createElement("div");
    galleryImg.classList.add("gallery-img");
    galleryImg.innerHTML = `<img src=${photo.src.large}></img>
    <p>${photo.photographer}</p>`;
    gallery.appendChild(galleryImg);
  });
}

async function searchPhotos(e) {
  e.preventDefault();
  searchValue = searchInput.value;
  console.log(searchValue);
  const dataFetch = await fetch(
    `https://api.pexels.com/v1/search?query=${searchValue}&per_page=15`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: api,
      },
    }
  );
  const data = await dataFetch.json();
  console.log(data.photos);
  gallery.innerHTML = "";
  searchInput.value = "";
  data.photos.forEach((photo) => {
    const galleryImg = document.createElement("div");
    galleryImg.classList.add("gallery-img");
    galleryImg.innerHTML = `<img src=${photo.src.large}></img>
    <p>${photo.photographer}</p>`;
    gallery.appendChild(galleryImg);
  });
}

curatedPhotos();
