
// esperar a que documento haya terminado de cargar:

$(document).ready(function(){

  // seleccionar el cuadrado inicial y ocultarlo
  var cuadradoInicial

  // seleccionar cuadrado utilizando su clase:
  cuadradoInicial = $(".cuadrado")

  // quitar el cuadrado inicial del lugar donde está,
  // va a quedar "flotando" en la memoria, sin lugar en el DOM
  cuadradoInicial.detach()


  // activar boton para añadir un cuadrado
  // lo seleccionamos usando su "id"
  $("#annadir_uno").click(function(){

      console.log("Añadir uno!")

      // colocar una copia del cuadroInicial en su lugar en el DOM
      // que es main (body > main) (mismo selector que css)

      var copia

      copia = cuadradoInicial.clone()


      $("body > main").append( copia )

      // para solucionar un problmea con las animaciones y
      // el refrescado de navegadores, tenemos que
      // retrasar brevemente (100ms) la aplicacion del estilo opacity: 1
      setTimeout(function(){

        copia.css({
          opacity: 1
        })

        asignarColorAleatorio( copia )

      }, 100 )

  })

  $("#quitar_uno").click(function(){

    // seleccionar todos los cuadrados que existen dentro de main:
    var cuadrados = $("main .cuadrado")

    // seleccionar el último y quitar su opacidad
    cuadrados.last().css({
      opacity: 0
    })
    // esperar a terminar transicion, luego quitar elemento del DOM
    setTimeout(function(){
      cuadrados.last().remove()
    }, 1000 )

  })


  $("#quitar_todos").click(function(){

    var cuadrados = $("main .cuadrado")

    // podemos eliminarlos todos de una vez:
    cuadrados.remove()

  })



  $("#cambiar_colores").click(function(){

    var cuadrados = $("main .cuadrado")

    // por cada cuadrado, vamos a hacer algo:
    cuadrados.each(function(){

      // cada cuadrado es representado por "$(this)"
      var cadaCuadrado = $(this)

      // invocamos la función para cambiar color, pasándole cada cuadrado:
      asignarColorAleatorio( cadaCuadrado )

    })


  })



})


function asignarColorAleatorio( elCuadrado ) {

  // crear color aleatorio
  // generaremos 3 números distintos aleatorios entre 0 y 255,
  // y los redondearemos hacia abajo
  var r = Math.floor( Math.random() * 255 )
  var g = Math.floor( Math.random() * 255 )
  var b = Math.floor( Math.random() * 255 )

  // integrar un string nuevo:
  // el resultado debe ser algo como "rgba(255,255,255)"

  var nuevoColor = "rgb(" + r + "," + g + "," + b + ")"

  // aplicar nuevo color
  elCuadrado.css({
    backgroundColor: nuevoColor
  })


}
