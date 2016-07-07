'use strict';

var $ = global.$ = require( 'jquery' );
var jQuery = global.jQuery = require( 'jquery' );

var Blazy = require( 'blazy' );
var bLazy = new Blazy();





var timer;
$( window ).resize( function(){

	clearTimeout( timer );
	timer = setTimeout( function(){

		bLazy.revalidate();

	}, 500 );
});