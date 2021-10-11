const logout = document.getElementById("logout");
const user = document.getElementById("user").innerHTML;

console.log(user);
logout.addEventListener("click", async () => {
  console.log("click");
  const response = await fetch(`http://localhost:8080/logout`);
  if (response.status === 400) {
    throw `Ocurrio un problema.`;
  }
  if (response.status === 200) {
    console.log(`Usuario deslogeado ${user}`);
    location.reload();
  }
});
