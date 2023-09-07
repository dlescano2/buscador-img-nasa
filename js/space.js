const DATA_URL = "https://images-api.nasa.gov/search?q=";
const inputBuscar = document.getElementById("inputBuscar");
const contenedor = document.getElementById("contenedor");
document.getElementById("btnBuscar").addEventListener("click", () => {
  const searchText = inputBuscar.value.trim();
  if (searchText) {
    fetch(DATA_URL + encodeURIComponent(searchText))
      .then(response => response.json())
      .then(data => {
        contenedor.innerHTML = ""; 
        data.collection.items.forEach(item => {
          const imgSrc = item.links[0].href;
          const title = item.data[0].title;
          const description = item.data[0].description;
          contenedor.innerHTML += `
            <div class="boxInfo">
              <div class"boxImage"><img class="mainImageInfo" src="${imgSrc}" alt="${title}"></div>
              <p class="titleInfo"><strong>Título:</strong> <span>${title}</span></p>
              <p class="descriptionInfo"><strong>Descripción:</strong> <span>${description}</span></p>
            </div>
          `;
        });
      })
      .catch(error => console.error("Error al buscar imágenes:", error));
    }
  });