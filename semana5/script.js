// Referencias a elementos del DOM
alert ("HOLA MUNDO TECNOLOGICO DA CLIK PARA CONTINUAR");

const imageUrlInput = document.getElementById("imageUrl");
const addImageBtn = document.getElementById("addImageBtn");
const deleteImageBtn = document.getElementById("deleteImageBtn");
const gallery = document.getElementById("gallery");

let selectedImage = null;

// Función para agregar imagen
addImageBtn.addEventListener("click", () => {
  const url = imageUrlInput.value.trim();
  if (url) {
    const img = document.createElement("img");
    img.src = url;

    // Evento para seleccionar imagen
    img.addEventListener("click", () => {
      if (selectedImage) {
        selectedImage.classList.remove("selected");
      }
      img.classList.add("selected");
      selectedImage = img;
    });

    gallery.appendChild(img);
    imageUrlInput.value = ""; // limpiar campo
  }
});

// Función para eliminar imagen seleccionada
deleteImageBtn.addEventListener("click", () => {
  if (selectedImage) {
    gallery.removeChild(selectedImage);
    selectedImage = null;
  }
});

// Atajo de teclado: Enter para agregar imagen
imageUrlInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addImageBtn.click();
  }
});