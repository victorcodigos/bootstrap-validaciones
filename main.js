// selectores
const inputNombre = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputPassUno = document.querySelector("#passwordUno");
const inputPassDos = document.querySelector("#passwordDos");
const inputBtn = document.querySelector("#btn");
const borrar = document.querySelector("#borrando");
const password = document.querySelector("#password");
const email = document.querySelector("#email");
const parrafo = document.querySelector(".parrafo");


// function para implementar los datos

function onSubmit(e) {
  e.preventDefault();
  const nombre = inputNombre.value;
  const emailValue = inputEmail.value;
  const inputPassUnoValue = inputPassUno.value;
  const inputPassDosValue = inputPassDos.value;

  console.log(nombre, emailValue, inputPassUnoValue, inputPassDosValue);


  const user = {
    nombre, //si la key y la value se llaman igual solo se pone una
    correo: emailValue,
    passwordUno: inputPassUnoValue,
    passwordDos: inputPassDosValue,
  };

  verify()
  localStorage.setItem("usuario", JSON.stringify(user));
  console.log(user)

}
// funcion para borrar todo el local storage con el boton borrar todos local

function clearLocal() {
  localStorage.clear()
};

inputBtn.addEventListener("click", onSubmit);

// validar datos 

let datos = {};

function verify() {
  const password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,8}$/;
  //requires one lower case letter, one upper case letter,  one digit, 6-13 length, and no space.
  //Matches	== 1agdA*$# | 1agdA*$# | 1agdA*$#


  const email = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  // requires Email validator that adheres directly to the specification for email address naming
  // Matches	asmith@mactec.com | foo12@foo.edu | bob.smith@foo.tv

  // llamando la function verify

  if (inputNombre.value === '' || inputEmail.value === '' || inputPassUno.value === '' || inputPassDos.value === '') {

    msg.innerHTML = `<p class= "p-error" >"Please enter all fields!"</p> `;
  }
  else if (email.test(inputEmail.value) !== true) {
    msg.innerHTML = `<p class= "p-error" >Please enter a valid email!</p> `;
  }
  else if (password.test(inputPassUno.value) !== true) {
    msg.innerHTML = `<p class= "p-error">"Please enter a valid password!"</p>`;
  }
  else if (password.test(inputPassUno.value === inputPassDos.value)) {
    msg.innerHTML = `<p class= "p-error">"It must be the same password!"</p>`;
  }
  else {
    msg.innerHTML = `<p class= "p-success">"Usuario creado correctamente!"</p>`;
  }
  setTimeout(() => { msg.innerHTML = ""; }, 6000);
}
