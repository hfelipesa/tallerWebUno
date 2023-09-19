var Contador=0
var contadorContraseñas=0
var opcion
var opcionNumeros
var opcionFactorial
var numeroFactorial


do{
     opcion=Number(prompt("----------BIENVENIDO A TU CALCULADOR ONLINE----------\nSelecciona de la lista la operacion que deseas realizar \n 1- Contador de numeros pares e impares"+
    " \n 2- Calculadora Factorial \n 3- Validacion de contraseña \n 4- Generador de tablas de multiplicar \n 5- Suma de Numeros Primos"+
    "\n 6- Secuencia Fibonacci \n 7- Convertidor de Temperatura \n 8- Calculadora de Potencia \n 9 Salir del Sistema"))
   
        switch(opcion){
            case 1:
                console.log("1- Contador de numeros pares e impares")

            do{
                opcionNumeros=Number(prompt("1- Realizar Calculo\n2- Salir"))
                
                switch(opcionNumeros){
                    case 1:
                        let contadorPar=0;
                        let numeroIngresado=Number(prompt("Por favor ingrese un numero"))
                        for (let i=0;i<=numeroIngresado;i+=2){
                            console.log(i)
                            contadorPar++
                        }
                        console.log("Cantida numero par: "+contadorPar + "\n" )
                        
                        let contadorImpar=0
                        for (let i=1;i<=numeroIngresado;i+=2){
                            console.log(i)
                            contadorImpar++
                        }
                        console.log("Cantida numero impar: "+contadorImpar + "\n" )
                        
                        Contador++
                        console.log("Numero de operaciones realizadas: " + Contador)    
                        break;

                    case 2:
                        console.log("VOLVIENDO AL MENU PRINCIPAL")
                        break;
                    default:
                        console.log(" OPCION INVALIDA \n POR FAVOR INGRESE UNA OPCION VALIDA")    
     
                }
            }while(opcionNumeros!=2)                  
                break;
//*********************************************************************************************************************************************************************
            case 2:
                console.log("2 -Calcular factorial")
                do{
                    opcionFactorial=Number(prompt("1- Realizar Calculo\n2- Salir"))

                    if(opcionFactorial==1){
                        numeroFactorial=Number(prompt("por favor ingrese un numero positivo a calcular su factorial"))
                        if(numeroFactorial>0){
                            Contador++
                          for (let i=numeroFactorial-1;i>=1; i--){
                            numeroFactorial*=i
                            console.log("El factorial es: "+numeroFactorial)                           
                          }
                          console.log("Numero de operaciones realizadas " +Contador)
                        }
                        else if(numeroFactorial<0){                            
                            console.log("Para calcular factorial debe ingrese un numero entero positivo")
                        }else if(numeroFactorial===0){
                           console.log("El numero factorial de 0 es 1")
                    }
                    }else if(opcionFactorial==2){
                            console.log("Saliendo")
                    }else{
                        console.log("OPCION INVALIDA DIGITE UNA CORRECTA")
                    }
                    
                }while(opcionFactorial!=2)
                console.log("VOLVIENDO AL MENU PRINCIPAL")                
                break;
 //*************************************************************************************************************************************************** */               
            case 3:
                    console.log("3 -Validacion de contraseña")
                    let opcionContraseña
                do{                   
                   opcionContraseña=Number(prompt("1-Desea realizar validacion\n2- Salir"))
                   
                if(opcionContraseña==1){ 
                    contadorContraseñas++
                    const contraseña=prompt("Por favor Ingrese contraseña definida por el sistema") 
                    if (contraseña == "Secreto123"){
                        console.log(" Acceso concedido ")
                    }
                    else{
                        console.log("Contraseña incorrecta intente nuevamente")
                    }
                    console.log(contadorContraseñas)
                
                }else if(opcionContraseña==2){
                     console.log("VOLVIENDO Al MENU PRINCIPAL")
                }else{
                   console.log("OPCION INVALIDA DIGITE UNA CORRECTA")  
                }
                console.log("Numero de intentos de validacion " +contadorContraseñas )
                            
                }while(opcionContraseña!=2)
                break;
/************************************************************************************************************************************************************************************** */                
            case 4:

                console.log("4 -Generador de Tablas de Multiplicar")
        do{   
                  opcionNumeros=Number(prompt("1- Realizar Calculo\n2- Salir"))
                
                  switch(opcionNumeros){

                    case 1:
                        let numeroMultipliacion=Number(prompt("Por favor ingrese numero de tabla multiplacar que desea consultar"))
                                console.log("La tabla del numero "+numeroMultipliacion)
                        for (let i=1;i<=10;i++){
                            let resultado=numeroMultipliacion*i
                            console.log(numeroMultipliacion+ " x " +i+" = " +resultado)
                            
                        }
                        Contador++
                        console.log("Numero de operaciones realizadas: " + Contador)    
                        break;
                    case 2:
                        console.log("VOLVIENDO AL MENU PRINCIPAL")
                        break;
                    default:
                        console.log(" OPCION INVALIDA \n POR FAVOR INGRESE UNA OPCION VALIDA")    
     
                }
            }while(opcionNumeros!=2)                  
                break;
//************************************************************************************************************************************* */                 
            case 5:
                console.log("5")
                break;
            case 6:
                console.log("6")
                break;
            case 7:
                console.log("7")
                break;
            case 8:
                console.log("8")
                break;
            default:
                console.log("OPCION INVALIDA")
                break;
          
        }
            
}while(opcion!=9);

    alert("SALIENDO DEL SISTEMA GRACIAS POR TU VISITA")