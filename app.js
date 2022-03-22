const api = "563492ad6f91700001000001c52d87070c5547f29ee36618e00d5e4f";
const gallery = document.querySelector(".gallery");
const searchInput = document.querySelector(".search-input");
const submitButton = document.querySelector(".submit-btn");
let searchValue;

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
  console.log(data.photos);
  data.photos.forEach((photo) => {
    const galleryImg = document.createElement("div");
    galleryImg.classList.add("gallery-img");
    galleryImg.innerHTML = `<img src=${photo.src.large}></img>
    <p>${photo.photographer}</p>`;
    gallery.appendChild(galleryImg);
  });
}

curatedPhotos();
