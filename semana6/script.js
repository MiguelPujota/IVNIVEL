const form = document.getElementById("registroForm");
const btnEnviar = document.getElementById("btnEnviar");

const campos = {
  nombre: false,
  email: false,
  password: false,
  confirmPassword: false,
  edad: false
};

function validarNombre() {
  const nombre = document.getElementById("nombre").value.trim();
  const error = document.getElementById("errorNombre");
  campos.nombre = nombre.length >= 3;
  error.textContent = campos.nombre ? "" : "Debe tener al menos 3 caracteres.";
}

function validarEmail() {
  const email = document.getElementById("email").value.trim();
  const error = document.getElementById("errorEmail");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  campos.email = regex.test(email);
  error.textContent = campos.email ? "" : "Formato de correo inválido.";
}

function validarPassword() {
  const password = document.getElementById("password").value;
  const error = document.getElementById("errorPassword");
  const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;
  campos.password = password.length >= 8 && regex.test(password);
  error.textContent = campos.password ? "" : "Debe tener 8 caracteres, un número y un carácter especial.";
  validarConfirmPassword(); // Revalida coincidencia
}

function validarConfirmPassword() {
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;
  const error = document.getElementById("errorConfirmPassword");
  campos.confirmPassword = password === confirm && confirm !== "";
  error.textContent = campos.confirmPassword ? "" : "Las contraseñas no coinciden.";
}

function validarEdad() {
  const edad = parseInt(document.getElementById("edad").value);
  const error = document.getElementById("errorEdad");
  campos.edad = edad >= 18;
  error.textContent = campos.edad ? "" : "Debes tener al menos 18 años.";
}

function verificarFormulario() {
  const todosValidos = Object.values(campos).every(Boolean);
  btnEnviar.disabled = !todosValidos;
}

form.addEventListener("input", () => {
  validarNombre();
  validarEmail();
  validarPassword();
  validarConfirmPassword();
  validarEdad();
  verificarFormulario();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("¡Formulario enviado correctamente!");
});