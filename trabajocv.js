//botones de fondo
document.getElementById ('salmon').addEventListener ('click', function(){
    console.log ("Color de fondo : salmon")
    document.body.style.backgroundColor= '#FFF1E8'
        })
document.getElementById ('celeste').addEventListener ('click', function(){
    console.log ("Color de fondo : celeste")
    document.body.style.backgroundColor= '#C1FDFD'
        })
document.getElementById ('verde').addEventListener ('click', function(){
    console.log ("Color de fondo : verde")
    document.body.style.backgroundColor= '#A3FF9A'
        })
document.getElementById ('white').addEventListener ('click', function(){
    console.log ("Color de fondo :gris")
    document.body.style.backgroundColor= '#EEFFEE'
                })
//botones de indice
document.getElementById ('indice2').addEventListener ('click', function(){
    document.getElementById ('indice').style.display='block';
    document.getElementById ('ocultar').style.display='block';})

document.getElementById ('ocultar').addEventListener ('click', function(){
        document.getElementById ('indice').style.display='none';
        document.getElementById ('ocultar').style.display='none';})

//botones de contacto
document.getElementById ('telefono').addEventListener ('click', function(){
    document.getElementById ('telefono').innerHTML= "035486034047"})

document.getElementById ('facebook').addEventListener ('click', function(){
     document.getElementById ('facebook').innerHTML= "Julio fictiasiani"})
  
document.getElementById ('instagram').addEventListener ('click', function(){
    document.getElementById ('instagram').innerHTML= "Julio_fictisiani13"})





    