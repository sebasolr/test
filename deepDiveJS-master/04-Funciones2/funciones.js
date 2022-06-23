
//primera comprobacion
let concatenar = function (...args) {
    
    return args.join('')
    
}
//Segunda comprobacion
function funcionParaInvocar(){
    return 'Me llmaron!'
};
function invocarFunciones(funcionParaInvocar,otraFuncion){
    if(otraFuncion == undefined){
      
     return funcionParaInvocar()  
    }else{
        return funcionParaInvocar() + otraFuncion() 
    }
   
}
function otraFuncion() { 
    return ' y despues a otra!' 
}

//Tercera comprobacion
function creadorDeIncrementos(num){
    let  incrementaPor = function(x){
        return num +x
    }
    return incrementaPor
}
// Cuarta comprobacion
  
  function invocacionUnica(func) {
    let veces =0 //veces que se ha ejecutado
    function retorno(){
        if(veces == 0){
            func()
            veces++;
        }
    }
   return retorno
    }
  
// Quinta comprobacion

function objetoConClousure(){
    let valor = 0;
    const obj = {
        incremento: function(){
            valor++
        },
        incrementoPor10: function(){
            valor +=10
        },
        pedirValor: function(){
            return valor
        },
        cambiarValor: function(nuevovalor){
            valor = nuevovalor
        },
    };
    return obj;
}

// Sexta

function ListaDeFuncionesInvitados(arr,cod){
    const arrFunciones = []
    for (let nombre of arr){
        arrFunciones.push(function(intentocod){
            if(intentocod == cod){
                return nombre;
             }  else{
                return 'código secreto: invalido'
                    
                
            }

        })
    }
    return arrFunciones
}