import validator from "./validator.js"; // importar el modulo validator.js
const formElement=document.querySelector("form")//Captura el contenido de la etiqueta form del html (nodo)
function onSubmitForm() { //Funcion de evaluacion cuando suceda el evento submit
    formElement.addEventListener("submit",(event)=>{
      event.preventDefault() //Permite que nodo capturado ,escuche el evento Submit y ejecute una operacion
        const formData=new FormData(formElement) // El nodo capturado lo convierte en objeto
        const numeroTarjeta=formData.get("numerotarjeta") // Accede al dato ingresado del campo de tarjeta
        if (validator.isValid(numeroTarjeta)) { //Llamar a la funcion validation

          const fieldNumberPassword=document.getElementById('inumerotarjeta')

          const hidenNumberTarget=validator.maskify(numeroTarjeta)
          fieldNumberPassword.value=hidenNumberTarget
          const messageElementSucces=document.querySelector('.message-validation-success');
          messageElementSucces.style.display="block"
          messageElementSucces.innerHTML=`Tarjeta Valida`
          const messageElementError=document.querySelector('.message-validation-error');
          messageElementError.style.display="none"
      }
      else {
        const fieldNumberPassword=document.getElementById('inumerotarjeta')
        const hidenNumberTarget=validator.maskify(numeroTarjeta)
        fieldNumberPassword.value=hidenNumberTarget
        const messageElement=document.querySelector('.message-validation-error');
        messageElement.style.display="block"
        messageElement.innerHTML=`Tarjeta Invalida`
        const messageElementSuccess=document.querySelector('.message-validation-success');
        messageElementSuccess.style.display="none"
      }
    })
}
function cleanForm() {
  const buttonReset=formElement.querySelector('.button-reset')
  buttonReset.addEventListener('click',()=>{
    window.location.href='index.html'
  })

}
onSubmitForm() //ejecutar
cleanForm()