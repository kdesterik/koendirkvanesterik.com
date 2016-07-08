/*
* @Author: Koen Dirk van Esterik
* @Date:	 2016-06-05 14:01:04
* @Last Modified by:	 Koen Dirk van Esterik
* @Last Modified time: 2016-06-08 23:35:42
*/

'use strict';

var handlebars = require( 'express-hbs' );

module.exports = function() {

	/**
	 * {{#compare}} compare variable to variable
	 *
	 * @param string v1
	 * @param string operator
	 * @param string v2
	 * @param object options
	 * @return boolean
	 */
	handlebars.registerHelper( 'compare', function ( v1, operator, v2, options ){

		switch( operator ){
			case '==':
					return ( v1 == v2 )	? options.fn( this ) : options.inverse( this );
			case '===':
					return ( v1 === v2 ) ? options.fn( this ) : options.inverse( this );
			case '!=':
					return ( v1 != v2 )	? options.fn( this ) : options.inverse( this );
			case '!==':
					return ( v1 !== v2 ) ? options.fn( this ) : options.inverse( this );
			case '<':
					return ( v1 < v2 )	 ? options.fn( this ) : options.inverse( this );
			case '<=':
					return ( v1 <= v2 )	? options.fn( this ) : options.inverse( this );
			case '>':
					return ( v1 > v2 )	 ? options.fn( this ) : options.inverse( this );
			case '>=':
					return ( v1 >= v2 )	? options.fn( this ) : options.inverse( this );
			case '&&':
					return ( v1 && v2 )	? options.fn( this ) : options.inverse( this );
			case '||':
					return ( v1 || v2 )	? options.fn( this ) : options.inverse( this );
			case 'typeof':
					return ( typeof v1 == v2 )	? options.fn( this ) : options.inverse( this );
			default:
					return options.inverse( this );
		}
	});


	/**
	 * {{#process_post}} wrap specified content in div tags
	 *
	 * @param object content
	 * @return string
	 */
	handlebars.registerHelper( 'process_post', function( content ){

		var _ = require( 'lodash' );
		var map = [{
			from: /src=".*?(fullscreen|desktop|laptop|tablet|mobile)"/g,
			to: function( original ){
				return 'class="b-lazy" src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw== data-' + original
			}
		},{
			from: /<img.*?(logo|fullscreen|desktop|laptop|tablet|mobile).*?>/g,
			to: function( original, match ){
				return '<div class="' + match + '">' + original + '</div>';
			}
		},{
			from: /swatch\(\s?#?([0-9a-fA-F]*)\s?\);/g,
			to: function( original, match ){
				return '<div class="swatch"><div class="color" style="background-color:#' + match + ';"></div><div class="code">#' + match + '</div></div>';
			}
		}]

		var string = content.fn( this );
		_.each( map, function( value ){
			if( !( value.from instanceof RegExp )){
				var fromSafe = String( value.from ).replace( /[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&" );
				value.from = new RegExp( fromSafe, 'g' );
			}
			string = string.replace( value.from, value.to );
		});
		return string;
	});



	/**
	 * {{remove_slashes}} remove tralings slashes within str
	 *
	 * @param string str
	 * @return string
	 */
	handlebars.registerHelper( 'remove_slashes', function( str ){
		
		return str.replace( /^\/|\/$/g, '' );
	});
};
