const form = document.getElementById("formLogIn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = document.getElementById("typeEmailX").value;
  const password = document.getElementById("typePasswordX").value;

  try {
    fetch(`http://localhost:8080/login?user=${user}&password=${password}`).then(
      (res) => {
        if (res.status === 200) {
          location.href = "logeado.html";
        }
        if (res.status === 400) {
          console.log("No se pudo logeaar");
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
});
