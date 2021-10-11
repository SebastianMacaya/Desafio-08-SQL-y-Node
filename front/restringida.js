const info = document.getElementById("info");

fetch("http://localhost:8080/api/productos-test")
  .then((response) => response.json())
  .then((data) => {
    let html = "";
    data.prods.forEach((element) => {
      html += `
  <tr >
  <th scope="row">${element.id}</th>
  <td>${element.name}</td>
  <td>${element.price}</td>
  <td> <img src="${element.pictureURL}" alt="" width="100"></td>
</tr>
  `;
    });

    info.innerHTML = html;
  });
