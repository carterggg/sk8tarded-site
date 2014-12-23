

//toggle effect

// $('.toggle').click(function(){
//	$(this).next().fadeToggle('slow');
//	$(".toggle-info").toggleClass("hidden");

// });




$( ".toggle" ).click(function() {
  $( ".toggle-info" ).toggle( "slow", function() {
    // Animation complete.
  });
});






$('.toggle').click(function(){
	$(this).next().fadeToggle('slow');
	$(".toggle-info").toggleClass("hidden");

});



$( ".toggle" ).click(function() {
  $( ".toggle-info" ).toggle( "slow" );
});



var flip = 0;
$( ".toggle" ).click(function() {
  $( ".toggle-info" ).toggle( flip++ % 2 === 0 );
	$(".toggle-info").toggleClass("hidden");
});