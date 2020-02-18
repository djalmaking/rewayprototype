    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });


// multi slider
// With JQuery
// $("#ex2").slider({});

// Without JQuery
// var slider = new Slider('#ex2', {});

// modal
$(function() {
  $('.pop').on('click', function() {
    $('.imagepreview').attr('src', $(this).find('img').attr('src'));
    $('#imagemodal').modal('show');   
  });		
});

// On load, show collpase



// Change button text

$(function () {
  $('.selectpicker').selectpicker();
});


// $(".selectpicker").on('rendered.bs.select', function (e) {
//   $('.buttonSelect').on('click',function(){
//       console.log($(this).data('li'));
//       $(this).remove();
//       $(".selectpicker option:nth-child(" + ($(this).data('li') + 1) + ")").prop('selected',false);
//       $('.selectpicker').selectpicker('refresh');
//       return false;
//   })
// });


$(document).ready(function() {
  $('.js-example-basic-multiple').select2();
});


// Range slider


(function( $ ){
  $( document ).ready( function() {
    $( '.input-range').each(function(){
      var value = $(this).attr('data-slider-value');
      var separator = value.indexOf(',');
      if( separator !== -1 ){
        value = value.split(',');
        value.forEach(function(item, i, arr) {
          arr[ i ] = parseFloat( item );
        });
      } else {
        value = parseFloat( value );
      }
      $( this ).slider({
        formatter: function(value) {
          console.log(value);
          return 'R' + value;
        },
        min: parseFloat( $( this ).attr('data-slider-min') ),
        max: parseFloat( $( this ).attr('data-slider-max') ), 
        range: $( this ).attr('data-slider-range'),
        value: value,
        tooltip_split: $( this ).attr('data-slider-tooltip_split'),
        tooltip: $( this ).attr('data-slider-tooltip')
      });
    });
    
   } );
  } )( jQuery );




 


