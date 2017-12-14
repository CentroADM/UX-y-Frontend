$(document).ready(function(){


  $('#lista-audios li a').click(function(){

    // el link clickado es representado por "$(this)":
    var link = $(this)

    // obtengamos el valor del atributo "audio" del li que contiene el link clicado
    var li_padre = link.parent()
    var audio_id = li_padre.attr('audio')

    abrirInformacionTrack( audio_id )

    return false;

  })

  // cargar primer track:
  var idPrimerAudio = $('#lista-audios li').first().attr('audio')
  abrirInformacionTrack( idPrimerAudio )

})






function abrirInformacionTrack( id ) {

  // buscamos la info correspondiente usando la id
  // (le anteponemos el '#' para representar un ID)

  var info_audio = $("#informacion-audios #" + id )

  // ocultar la información de los otros tracks
  // usando "siblings", o "hermanos"
  info_audio.siblings().hide()

  // mostrar la información seleccionada
  info_audio.show()


  // ocultamos el audio dentro de la info
  info_audio.find("audio").hide()


  // clonamos la informacion del track para ponerlo en el footer
  var titulo = info_audio.find(".titulo").clone()
  var imagen = info_audio.find(".imagen").clone()
  var audio = info_audio.find("audio").clone()

  // borramos todo el contenido del footer:
  $("body>footer").html( "" )

  $("body>footer").append( imagen )
  $("body>footer").append( titulo )
  $("body>footer").append( audio )

  // mostramos el audio clonado y lo reproducimos:
  audio.show()
  audio.trigger("play")


}
