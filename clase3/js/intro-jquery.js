// $ representa jQuery

// objeto de jquery:
// $()


// seleccionar el documento y prepararlo

$(document).ready(function()
{

  menu_responsivo()

  console.log("jquery listo")

})



function menu_responsivo()
{

  if( $(window).width() < 960 )
  {

    $('.boton-menu').click(function()
    {

      console.log("hiciste click")

      if( $('.boton-menu').hasClass('expandido') == false ) {

        $('#main-menu').css(
          {
            display: 'inline-block'
          }
        )

        $('.boton-menu').addClass('expandido')

        $('.boton-menu .fa')
        .removeClass('fa-bars')
        .addClass('fa-close')

      } else {

        $('#main-menu').css(
          {
            display: 'none'
          }
        )

        $('.boton-menu').removeClass('expandido')

        $('.boton-menu .fa')
        .removeClass('fa-close')
        .addClass('fa-bars')

      }

    })

  }

}
