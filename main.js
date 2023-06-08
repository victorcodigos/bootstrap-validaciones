const inputNombre = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputPassUno = document.querySelector("#passwordUno");
const inputPassDos = document.querySelector("#passwordDos");
const inputBtn = document.querySelector("#btn");
const borrar = document.querySelector("#borrando");




function onSubmit(e) {
    e.preventDefault();
  
    const nombre = inputNombre.value;
    const emailValue = inputEmail.value;
    const inputPassUnoValue = inputPassUno.value;
    const inputPassDosValue = inputPassDos.value;

    console.log(inputPassUno)

  
    const user = {
      nombre, //si la key y la value se llaman igual solo se pone una
      correo: emailValue,
      passwordUno: inputPassUnoValue,
      passwordDos: inputPassDosValue,

    };

    localStorage.setItem("usuario", JSON.stringify(user)); 
    console.log(user)

}
// funcion para borrar todo el local storage con el boton borrar todos local

 function clearLocal() {localStorage.clear()};


 inputBtn.addEventListener("click", onSubmit);

 // validar datos 
 
 let datos = {};

 function validarDatos(e) {
    e.preventDefault();
    datos= {
      nombre:inputNombre.value,
      email:inputEmail.value,
      passwordUno:inputPassUno.value,
      passwordDos:inputPassDos.value,
    }

 };

 if (
    inputNombre.value !== "" ||
    inputEmail.value !== "" ||
    inputPassUno.value !== "" ||
    inputPassDos.value !== "" )
{ datos.innerHTML = "Poner todos los campos"};