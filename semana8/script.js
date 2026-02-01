// Botón de alerta
document.getElementById("alertBtn").addEventListener("click", function() {
  alert("¡Bienvenido a mi página interactiva!");
});

// Validación del formulario
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita envío automático
  let valid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  // Validación básica
  if (!name.value.trim()) {
    name.classList.add("is-invalid");
    valid = false;
  } else {
    name.classList.remove("is-invalid");
  }

  if (!email.value.includes("@")) {
    email.classList.add("is-invalid");
    valid = false;
  } else {
    email.classList.remove("is-invalid");
  }

  if (!message.value.trim()) {
    message.classList.add("is-invalid");
    valid = false;
  } else {
    message.classList.remove("is-invalid");
  }

  if (valid) {
    alert("Formulario enviado correctamente ✅");
    this.reset();
  }
});