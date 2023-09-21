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
                opcionNumeros=Number(prompt("DESEA REALIZAR CALCULO \n1- Continuar\n2- Salir"))
                
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
                    opcionFactorial=Number(prompt("DESEA REALIZAR CALCULO \n1- Continuar\n2- Salir"))

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
                        console.log("VOLVIENDO AL MENU PRINCIPAL")  
                    }else{
                        console.log(" OPCION INVALIDA \n POR FAVOR INGRESE UNA OPCION VALIDA")
                    }
                    
                }while(opcionFactorial!=2)
                              
                break;
 //*************************************************************************************************************************************************** */               
            case 3:
                    console.log("3 -Validacion de contraseña")
                    let opcionContraseña
                do{                   
                   opcionContraseña=Number(prompt("DESEA REALIZAR CALCULO \n1- Continuar\n2- Salir"))
                   
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
                   console.log(" OPCION INVALIDA \n POR FAVOR INGRESE UNA OPCION VALIDA")  
                }
                console.log("Numero de intentos de validacion " +contadorContraseñas )
                            
                }while(opcionContraseña!=2)
                break;
/************************************************************************************************************************************************************************************** */                
            case 4:

                console.log("4 -Generador de Tablas de Multiplicar")
        do{   
                  opcionNumeros=Number(prompt("DESEA REALIZAR CALCULO \n1- Continuar\n2- Salir"))
                
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
                console.log("Suma de Números Primos:")                
            do{
                opcionNumeros=Number(prompt("DESEA REALIZAR CALCULO \n1- Continuar\n2- Salir"))

                switch(opcionNumeros){
                    case 1:
                        let sumaPrimos=0
                    let numeroPrimo=parseInt(prompt("Por favor ingrese un numero para calcular numeros primos"))
                    
                    for(let num=2;num<=numeroPrimo;num++){
                        let esPrimo=true

                        for(let i=2;i<=Math.sqrt(num);i++){
                            if(num % i===0){
                                esPrimo=false
                                break
                            }
                        }
                        if(esPrimo){
                            console.log(num + " Es primo ")
                            sumaPrimos+=num
                        }
                    }
                    console.log("La suma de los numeros primos hasta " + numeroPrimo + " es " +sumaPrimos) 
                    
                    Contador++
                    console.log("Numero de operaciones realizadas: " + Contador)    
                    
                    case 2:
                        console.log("VOLVIENDO AL MENU PRINCIPAL")
                        break;
                    default:
                        console.log(" OPCION INVALIDA \n POR FAVOR INGRESE UNA OPCION VALIDA")    
                    }

            }while(opcionNumeros!=2)
                break;
            case 6:
                console.log("Secuencia de Fibonacci: ")

                do{   
                    opcionNumeros=Number(prompt("DESEA REALIZAR CALCULO \n1- Continuar\n2- Salir"))
                  
                    switch(opcionNumeros){

                      case 1:
                      let n1=0
                      let n2=1
                      let resultado=0

                      var numeroFibonacci=Number(prompt("ingrese numero para realizar la frecuencia"))
                      console.log(n1)
                      console.log(n2)
                      for(let i=3;i<=numeroFibonacci;i++){
                          resultado=n1+n2
                          n1=n2
                          n2=resultado
                          console.log(resultado)
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
            case 7:
                     console.log("Convertidor de Temperatura:")
                     let opcionGrados

                     do{
                        opcionNumeros=Number(prompt("DESEA REALIZAR CALCULO \n1- Continuar\n2- Salir"))

                        if(opcionNumeros==1){
                            console.log("1-pasar celsius a Fahrenheit")
                            console.log("2-pasar fahrenheit a Celsius")
                            let opcionGrados=Number(prompt("POR FAVOR SELECCIONE EL TIPO DE CONVERSION"))
                          switch(opcionGrados){
                            case 1:
                                let valorIngresadoc=Number(prompt("Por favor ingrese el valor a pasar celsius a Fahrenheit"))
                                let gradosC=(1.8*valorIngresadoc)+32
                                console.log(gradosC)
                                break
                            case 2:
                                let valorIngresadoF=Number(prompt("Por favor ingrese el valor a pasar Fahrenheit a celsius"))
                                let gradosF=(valorIngresadoF-32)/1.8
                                console.log(gradosF)
                                break
                            default:
                                console.log(" OPCION INVALIDA VOLVIENDO AL MENU ANTERIOR ") 
                                break       
                          }
                        }else if(opcionGrados==2){
                            console.log("VOLVIENDO AL MENU PRINCIPAL")
                        }else{
                              console.log(" OPCION INVALIDA \n POR FAVOR INGRESE UNA OPCION VALIDA") 
                        }

                     }while(opcionNumeros!=2)
                     break; 
/**************************************************************************************************************************************************** */
                
            case 8:
                console.log("8")
                break;
            case 9:
                console.log("SALIENDO")     
            default:
                break;   
        }
            
}while(opcion!=9);

    alert("SALIENDO DEL SISTEMA GRACIAS POR TU VISITA")