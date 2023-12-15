 const img = document.getElementById("photo");
 const first = document.getElementById("first");
 const last= document.getElementById("last");
 const street = document.getElementById("street");
 const age = document.getElementById("age");
 const dob = document.getElementById("dob");
 const phone = document.getElementById("phone");
 const email = document.getElementById("email");
 const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    getUserInfo();
  });

 async function getUserInfo(){
    const response = await fetch("https://randomuser.me/api/");
    const result = await response.json();
    console.log(result);
    UserInfo(result);
  }

function UserInfo(result){
    img.src = result.results[0].picture.large;
    first.textContent = result.results[0].name.first;
    last.textContent = result.results[0].name.last;
    street.textContent =  result.results[0].street.country;
    age.textContent = result.results[0].dob.age;
    dob.textContent = result.results[0].dob.date.split("-")[0];
    phone.textContent = result.results[0].phone;
    email.textContent = result.results[0].email;
 }

 
 








// const btn = document.getElementById("btn");

// btn.addEventListener("click", function () {
//   getPerson(getData);
// });

// function getPerson(cb) {
//   const url = "https://randomuser.me/api/";
//   const request = new XMLHttpRequest();

//   request.open("GET", url, true);
//   request.onload = function () {
//     if (this.status === 200) {
//       cb(this.responseText, showData);
//     }
//   };

//   request.send();
// }

// function getData(response, cb) {
//   const data = JSON.parse(response);

//   const {
//     name: { first },
//     name: { last },
//     picture: { large },
//     location: { street },
//     phone,
//     email,
//   } = data.results[0];
//   cb(first, last, large, street, phone, email);
// }

// function showData(first, last, large, street, phone, email) {
//   document.getElementById("name").textContent = `${first} ${last}`;
//   document.getElementById("first").textContent = first;
//   document.getElementById("last").textContent = last;
//   document.getElementById("street").textContent = street.name;
//   document.getElementById("phone").textContent = phone;
//   document.getElementById("email").textContent = email;
//   document.getElementById("photo").src = large;
// }