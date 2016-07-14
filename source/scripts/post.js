'use strict';

var $ = global.$ = require( 'jquery' );
var jQuery = global.jQuery = require( 'jquery' );

var Blazy = require( 'blazy' );
var bLazy = new Blazy();

var timer;
$( window ).resize( function(){
	clearTimeout( timer );
	timer = setTimeout( function(){ bLazy.revalidate();	}, 500 );
});


$( 'body' ).keydown( function( event ){
	var code = event.keyCode || event.which;
	switch( code ){
		case 37:
			var $previous = $( '.post-previous' );
			if( $previous.length ){ $previous.get( 0 ).click(); }
			break;
		case 39:
			var $next = $( '.post-next' );
			if( $next.length ){ $next.get( 0 ).click(); }
			break;
	}
});