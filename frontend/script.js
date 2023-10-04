const msg = document.querySelector(".msg");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const mobile = document.querySelector("#mobile");
const password = document.querySelector("#password");
const signup = document.querySelector(".signup");

var id = -2;
/****************************************************/
// Function to display data already available
/****************************************************/
async function displayData() {
  var html = "";
  //datarv is an object
  const datarv = await axios.get("http://localhost:3000/user/get-user");

  //datarv.data is an array
  const { allUsers: allData } = datarv.data;
  // console.log(allData);

  if (allData === null) return;

  for (let i = 0; i < allData.length; i++) {
    html = `<div class="child ${allData[i].id}">
            <div>${allData[i].name}</div>
            <div>${allData[i].email}</div> 
            <div>${allData[i].phonenumber}</div>
            <button class="editbtn" id="${allData[i].id}">Edit</button>
            <button class="deletebtn" id="${allData[i].id}">Delete</button> 
        </div>`;

    const display = document.querySelector(".display");
    display.insertAdjacentHTML("afterbegin", html);
  }
}
displayData();

/****************************************************/
// Listen for a click on the submit button
/****************************************************/
signup.addEventListener("click", function (e) {
  e.preventDefault();

  const pusername = username.value;
  const pemail = email.value;
  const pmobile = mobile.value;
  const ppassword = password.value;

  //data validation
  if (pusername === "" || pemail === "" || pmobile === "" || ppassword === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter values in all the fields!!!";
    // Remove error after 3 seconds
    setTimeout(() => {
      msg.classList.remove("error");
      msg.innerHTML = "";
    }, 4000);
  }

  const newUserData = {
    username: pusername,
    email: pemail,
    mobile: pmobile,
    password: ppassword,
  };
  console.log(newUserData);
  if (id === -2) {
    // storing new data
    console.log("inside if");
    axios
      .post("http://localhost:3000/user/add-user", newUserData)
      .then((res) => {
        displayData();
        // location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  }
  // } else if (id !== -2) {
  //   // Editing existing data
  //   axios
  //     .put(`http://localhost:3000/user/edit-user/${id}`, newUserData)
  //     .then((res) => {
  //       console.log(res.data);
  //       id = -2;
  //       // uname.value = "";
  //       // email.value = "";
  //       // mobile.value = "";
  //       // location.reload();
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }
});
