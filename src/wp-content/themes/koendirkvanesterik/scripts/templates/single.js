( function( $, window, document, undefined ){

	$( document ).ready( function(){

		if( $( '.single-post' ).get( 0 )){

			$.scrollify({

				section: 'section',
			});
		}
	});

})( jQuery, this, this.document );