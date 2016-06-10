/*
* @Author: Koen Dirk van Esterik
* @Date:   2016-06-05 14:01:04
* @Last Modified by:   Koen Dirk van Esterik
* @Last Modified time: 2016-06-08 23:35:42
*/

'use strict';

var handlebars = require( 'express-hbs' );
var _ = require( 'lodash' );

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
					return ( v1 == v2 )  ? options.fn( this ) : options.inverse( this );
			case '===':
					return ( v1 === v2 ) ? options.fn( this ) : options.inverse( this );
			case '!=':
					return ( v1 != v2 )  ? options.fn( this ) : options.inverse( this );
			case '!==':
					return ( v1 !== v2 ) ? options.fn( this ) : options.inverse( this );
			case '<':
					return ( v1 < v2 )   ? options.fn( this ) : options.inverse( this );
			case '<=':
					return ( v1 <= v2 )  ? options.fn( this ) : options.inverse( this );
			case '>':
					return ( v1 > v2 )   ? options.fn( this ) : options.inverse( this );
			case '>=':
					return ( v1 >= v2 )  ? options.fn( this ) : options.inverse( this );
			case '&&':
					return ( v1 && v2 )  ? options.fn( this ) : options.inverse( this );
			case '||':
					return ( v1 || v2 )  ? options.fn( this ) : options.inverse( this );
			case 'typeof':
					return ( typeof v1 == v2 )  ? options.fn( this ) : options.inverse( this );
			default:
					return options.inverse( this );
		}
	});


	/**
	 * {{#beautify_post}} wrap specified content in section tags
	 *
	 * @param object content
	 * @return string
	 */
	handlebars.registerHelper( 'beautify_post', function( content ){

		var map = [{
			from: /src/g,
			to: 'class="b-lazy" src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw== data-src'
		},{
			from: /<p><img(.*?)><\/p>/g,
			to: function( match, i ){
				return '<section><img' + i + '></section>';
			}
		},{
			from: /<img(.*?)(fullscreen|desktop|laptop|tablet|mobile)(.*?)>/g,
			to: function( match, i, original ){
				return '<div class="' + original + '">' + match + '</div>';
			}
		},{
			from: /<h1(.*?)>(.*?)<\/h1>/g,
			to: function( match ){
				return '<section><div class="container">' + match + '</div></section>';
			}
		},{
			from: /<p>(.*?)<\/p>/g,
			to: function( match ){

				return '<section><div class="container">' + match + '</div></section>';
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
};
