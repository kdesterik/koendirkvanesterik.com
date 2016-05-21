( function( $, window, document, undefined ){

	$( document ).keypress( function( event ){

		var code = event.keyCode || event.which;

		if( code === 7 ){

			if( $( 'body' ).hasClass( 'grid' )){

				$( 'body' ).removeClass( 'grid' );

			} else {

				$( 'body' ).addClass( 'grid' );
			}
		}   				
	});
	
})( jQuery, this, this.document );