const validator = {
  isValid:(creditCardNumber)=>{
  let arr = (creditCardNumber + '') //Para convertir un numero entero en cadena
    .split('') //Para convertir una cadena string a un array
    .reverse() //Para invertir el orden de los numeros
    .map(x => parseInt(x)); //Para recorrer cada elemento del array y convertirlo a entero
let doublePositionPair=arr.map((value,idx)=>{ //Declara una variable para doblar las posiciones pares y sumar los digitos mayores a 9
  if ((idx+1)%2==0) {
      value=value*2
      if (value>9) {
          let converValuetoArray = (value + '') //Para convertir  un numero entero en cadena
          .split('') //Para convertir una cadena string a un array
          .map(x => parseInt(x)); //Para recorrer cada elemento del array y convertirlo a entero
    
          const initialValue = 0;
          const sumarDigitosArray = converValuetoArray.reduce( //Obtener un valor previo y un valor actual
              (previousValue, currentValue) => previousValue + currentValue,//Recorrer el array e ir sumando los valores
              initialValue // Parametro de inicio de la Suma
            );
                  return sumarDigitosArray
                }else {
                    return value
                }
            
                } else {
                    return value+0
                }
            })
const initialValue = 0; //Declarar un acumulador
let sumAllDigits=doublePositionPair.reduce( //Definir una variable con funcion
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue 
); // Retorna la suma total y lo almacena en sumAllDigits
if (sumAllDigits%10==0){ 
   return true
}
else {
    return false
}
 }
};

export default validator;

