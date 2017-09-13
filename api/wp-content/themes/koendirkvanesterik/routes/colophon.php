<?php 

// Register Rest API route
add_action( 'rest_api_init', function (){

  register_rest_route( 'wp/v2', 'colophon', array(
  
    'methods' => 'GET',
    'callback' => 'get_colophon_data',
  ));
});


function get_colophon_data() {

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

  return [ $colophon ];
}
