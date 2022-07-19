const validator = {
  isValid:(creditCardNumber)=>{
  let arr = (creditCardNumber + '') //Para convertir un numero entero en cadena
    .split('') //Para convertir una cadena string a un array
    .reverse() //Para invertir el orden de los numeros
    .map(x => parseInt(x)); //Para recorrer cada elemento del array y convertirlo a entero
    console.log(arr);
//Recorrer el arrays de digitos y doblar si es mayor de 9
    let doublePositionPair=arr.map((value,idx)=>{ //Declara una variable para doblar las posiciones pares y sumar los digitos mayores a 9
  if ((idx+1)%2==0) { //Evaluo si la posicion es par
      value=value*2   // Si es para , que lo multiplique por dos
      if (value>9) {  // Si es mayor que 9
          let converValuetoArray = (value + '') //Para convertir  un numero entero en cadena
          .split('') //Para convertir una cadena string a un array
          .map(x => parseInt(x)); //Para recorrer cada elemento del array y convertirlo a entero
          //Recorrer el array para sumar sus elementos
          const initialValue = 0; //Valor inicial de la suma total
          const sumarDigitosArray = converValuetoArray.reduce( //Obtener un valor previo y un valor actual
              (previousValue, currentValue) => previousValue + currentValue,//Recorrer el array e ir sumando los valores
              initialValue // Parametro de inicio de la Suma
            );
                  return sumarDigitosArray
                }else {
                    return value //Si no es mayor a 9 , mantener el valor multiplicado por 2
                }

                } else {
                    return value+0 // Si no es una posicion par , entonces retorna el valor original
                }
            })
//Sumar los elementos del arrays
const initialValue = 0; //Declarar un acumulador
let sumAllDigits=doublePositionPair.reduce( //Definir una variable con funcion sumAllDigits
  (previousValue, currentValue) => previousValue + currentValue, // Iterando el array y sumando los valores
  initialValue ); // Retorna la suma total y lo almacena en sumAllDigits
if (sumAllDigits%10==0){  //Si la suma total es multiplo de 10 , con residuo 0
   return true
}
else {
    return false
}
 },
maskify:(creditCardNumber)=>{
    const size = creditCardNumber.length - 5;  //total de caracteres a enmascarar
    let maskString = "";
    for (let i=0; i < creditCardNumber.length; i++) {
      if (i <= size){      //iterar deacuerdo a los índices menores al "total de caracteres a encriptar"
        maskString = maskString + "#";   //sustituir por # y agregar a la variable en cada iteración
      } else {
        maskString = maskString + creditCardNumber[i]; //si no cumple agregar el número o letra
      }
    }
   return maskString;
 }
 };
export default validator; // Exporta el objeto validator que tiene un metodo de validacion validator y un metodo de enmascarar caracteres
