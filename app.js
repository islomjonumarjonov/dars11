const form = document.querySelector("form");
const ul = document.querySelector("ul");

fetch("http://localhost:3000/students/")
  .then((data) => {
    return data.json();
  })
  .then(() => {
    if (data.length > 0) {
      ul.innerHTML += `
      <li>
        <h2>${data.userName}</h2>
        <p>${data.age}</p>
        <img src=${data.photo}/>
      </li>`;
    }
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

//button
const submitBtn = document.querySelector("button");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const newStudent = {
    userName: form.name.value,
    age: form.age.value,
    photo: form.photo.value,
  };

  ul.innerHTML += `
  <li>
    <h2>${newStudent.userName}</h2>
    <p>${newStudent.age}</p>
    <img src=${newStudent.photo}/>
  </li>`;

  // ul.innerHTML = li;

  request(newStudent, "POST");
});

async function request(data, method = "GET", id) {
  let url = "http://localhost:3000/students/" + `${id ?? ""}`;
  const req = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : null,
  });

  const response = req.json();

  return response;
}

// function users(src) {
//   let ul = `
//   <li>
//     <h2>${src.userName}</h2>
//     <p>${src.age}</p>
//     <img src=${src.photo}/>
//     <button class="delete">Delete</button>
//   </li>
//   `;

// }

// addBtn.addEventListener("click", () => {
//   fetch("http://localhost:3000/students", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   console.log();
// });
