<?php 

// Register Rest API route
add_action( 'rest_api_init', function (){

  register_rest_route( 'wp/v2', 'portfolio', array(
  
    'methods' => 'GET',
    'callback' => 'get_portfolio_data',
  ));
});


function get_portfolio_data() {

  // Portfolio object
  $portfolio            = new stdClass;

  // Get content of first page 
  $content              = get_post( get_option( 'page_on_front' ) )->post_content;

  // Check if content contains display_posts shortcode
  if( preg_match( '/[\[].*?[\]]/', $content )){

    // Filter everything before display_posts shortcode
    preg_match( '/([\s\S]*?)[\[]/', $content, $intro );
    $portfolio->intro   = $intro[ 1 ];

    // Filter everything after display_posts shortcode
    preg_match( '/[\]]([\s\S]*$)/', $content, $profile );
    $portfolio->profile = $profile[ 1 ];

  } else {

    $portfolio->intro   = $content;
    $portfolio->profile = '';
  }

  return $portfolio;
}