<?php 

// Register Rest API route
add_action( 'rest_api_init', function (){

  register_rest_route( 'wp/v2', 'channels', array(
  
    'methods' => 'GET',
    'callback' => 'get_channels_data',
  ));
});


function get_channels_data() {

  $channels         = [];

  // Social media links
  foreach( wp_get_nav_menu_items( 'social-media' ) as $key => $data ){
    $item           = new stdClass;
    $item->id       = $key;
    $item->name     = slugify( $data->title );
    $item->title    = $data->title;
    $item->url      = $data->url;
    $channels[]     = $item;
  };

  return $channels;
}


// Slugify string
function slugify( $text ){

  // replace non letter or digits by -
  $text = preg_replace( '~[^\pL\d]+~u', '-', $text );

  // transliterate
  $text = iconv( 'utf-8', 'us-ascii//TRANSLIT', $text );

  // remove unwanted characters
  $text = preg_replace( '~[^-\w]+~', '', $text );

  // trim
  $text = trim( $text, '-' );

  // remove duplicate -
  $text = preg_replace( '~-+~', '-', $text );

  // lowercase
  $text = strtolower( $text );

  if ( empty( $text )) {
    return 'n-a';
  }

  return $text;
}