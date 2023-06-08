const inputNombre = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputPassUno = document.querySelector("#passwordUno");
const inputPassDos = document.querySelector("#passwordDos");
const inputBtn = document.querySelector("#btn");
const borrar = document.querySelector("#borrando");
const password = document.querySelector("#password");
const email = document.querySelector("#email");
const parrafo = document.querySelector(".parrafo")




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

function clearLocal() { localStorage.clear() };


inputBtn.addEventListener("click", onSubmit);

// validar datos 

let datos = {};

function verify() {
  const password = " ^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,8}$";
  //requires one lower case letter, one upper case letter,  one digit, 6-13 length, and no space.
  //Matches	== 1agdA*$# | 1agdA*$# | 1agdA*$#


  const email = "^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$";
  // requires Email validator that adheres directly to the specification for email address naming
  // Matches	asmith@mactec.com | foo12@foo.edu | bob.smith@foo.tv


  if (inputNombre.value === '' || inputEmail.value === '' || inputPassUno.value === '' || inputPassDos.value === '') {

  console.log("Inserir todos los dados");
  

  msg.innerHTML = `<p class= "p-error" >"Please enter all fields"</p> `;


} 


else (password.valueOf) (email.valueOf) === (true);
  
  {
  msg.innerHTML = ("Please enter a correct email")
 }
  
}