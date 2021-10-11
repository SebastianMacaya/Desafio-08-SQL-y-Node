const form = document.getElementById("formLogIn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const user = document.getElementById("typeEmailX");
  const password = document.getElementById("typePasswordX");

  try {
    const response = await fetch(
      `http://localhost:8080/login?user=${user.value}&password=${password.value}`
    );
    if (response.status === 400) {
      throw `Usuario o contraseña invalidos`;
    }
    if (response.status === 200) {
      console.log("Logeado con exito");
      location.reload();
    }
  } catch (error) {
    alert(error);
    user.value = "";
    password.value = "";
  }
});
