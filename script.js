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
  street.textContent =  result.results[0]?.location?.street?.country;
  age.textContent = result.results[0].dob.age;

  // Format the date of birth using the Date object
  const dobDate = new Date(result.results[0].dob.date);
  dob.textContent = dobDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  phone.textContent = result.results[0].phone;
  email.textContent = result.results[0].email;
}

