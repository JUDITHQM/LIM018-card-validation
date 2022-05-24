import validator from "./validator.js";
const formElement=document.querySelector("form")//Almacenar el nodo form
function onSubmitForm() { //Funcion de evaluacion cuando suceda el evento submit
    formElement.addEventListener("submit",(event)=>{
        const formData=new FormData(formElement)
        const numeroTarjeta=formData.get("numerotarjeta")
        if (validator.isValid(numeroTarjeta)) {
            alert("Tarjeta Valida")
        }
        else {
            alert("Tarjeta No valida")
        }
    })
}
onSubmitForm() //ejecutar