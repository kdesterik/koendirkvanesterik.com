'use strict';

var $ 			= global.$ = require( 'jquery' );
var jQuery 		= global.jQuery = require( 'jquery' );

var isIOS 		= /iPad|iPhone|iPod/i.test( navigator.userAgent );
var isAndroid 	= /Android/i.test( navigator.userAgent );


function switchAssets( state ){
	var assets = [ $( '.site-header' ), $( '.site-footer' )];
	switch( state ){
		case 'off':
			$.each( assets, function( key, $element ){
				if( !$element.hasClass( 'off' )){ $element.addClass( 'off' ); }
			});
			break;

		default:
			$.each( assets, function( key, $element ){
				if( $element.hasClass( 'off' )){ $element.removeClass( 'off' ); }
			});
			break;
	}
}


function switchSiblings( state, id ){

	switch( state ){
		case 'off':
			$( '.post' ).each( function( key, element ){
				if( $( element ).find( '#' + id ).length !== 0 ){
					if( !$( element ).hasClass( 'on' )){ $( element ).addClass( 'on' ); }
				} else {
					if( !$( element ).hasClass( 'off' )){ $( element ).addClass( 'off' ); }
				}
			});
			break;

		case 'on':
		/* falls through */

		default:
			$( '.post' ).each( function( key, element ){
				if( $( element ).find( '#' + id ).length !== 0 ){
					if( $( element ).hasClass( 'on' )){ $( element ).removeClass( 'on' ); }
				} else {
					if( $( element ).hasClass( 'off' )){ $( element ).removeClass( 'off' ); }
				}
			});
			break;
	}
}


function getPostImage( id ){
	return $( '.site-background' ).find( '[ data-target="' + id + '" ]' );
}


$( '.post-link' ).mouseover( function(){
	if( !isIOS && !isAndroid ){
		var id = $( this ).attr( 'id' );
		switchAssets( 'off' );
		switchSiblings( 'off', id );
		var $postImage = getPostImage( id );
		if( !$postImage.hasClass( 'active' )){ $postImage.addClass( 'active' ); }
	}
});


$( '.post-link' ).mouseout( function(){
	if( !isIOS && !isAndroid ){
		var id = $( this ).attr( 'id' );
		switchAssets( 'on' );
		switchSiblings( 'on', id );
		var $postImage = getPostImage( id );
		if( $postImage.hasClass( 'active' )){ $postImage.removeClass( 'active' ); }
	}
});

