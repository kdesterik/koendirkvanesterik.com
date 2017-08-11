<?php 

// Register Rest API route
add_action( 'rest_api_init', function (){

  register_rest_route( 'wp/v2', 'footer', array(
  
    'methods' => 'GET',
    'callback' => 'get_footer_data',
  ));
});


function get_footer_data() {

  // Footer object
  $footer           = new stdClass;

  // Colophon string
  $colophon         = '';
  $widgets          = wp_get_sidebars_widgets()[ 'sidebar-1' ];

  foreach( $widgets as $id ) {

    $widget         = 'widget_'._get_widget_id_base( $id );
    $base           = _get_widget_id_base( $id );
    $instance       = get_option( $widget );
    $base_id        = str_replace( $base . '-', '', $id );

    if( $instance[ $base_id ]['title'] == 'Colophon' ){

      $colophon     = apply_filters( 'the_content', $instance[ $base_id ]['text']) ;
    }
  }

  $footer->colophon = $colophon;

  // list array
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

  $footer->channels = $channels;

  return $footer;
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