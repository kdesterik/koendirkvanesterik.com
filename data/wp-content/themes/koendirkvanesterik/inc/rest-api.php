<?php 

// Register Rest API route
add_action( 'rest_api_init', function () {
  register_rest_route( '5383/01', '/index', array(
    'methods' => 'GET',
    'callback' => 'get_index_data',
  ));
});

function get_index_data () {

  // Index object
  $index                = new stdClass;
  $index->intro         = get_page_content( 'intro' );
  $index->profile       = get_page_content( 'profile' );

  // Footer object
  $footer               = new stdClass;

  // Social media links
  foreach( wp_get_nav_menu_items( 'social-media' ) as $key => $data ){
    $menu               = new stdClass;
    $menu->id           = $key;
    $menu->name         = slugify( $data->title );
    $menu->title        = $data->title;
    $menu->url          = $data->url;
    $footer->menu[]     = $menu;
  };

  // $index->portfolio     = process_posts();
  $index->footer        = $footer;

  return $index;
}


// Process profile page into object devided in paragraphs
function process_content( $string ){

  $array                = preg_split( '/\\r\\n|\\r|\\n/', $string );
  $array                = array_filter( $array );
  $array                = array_values( $array );
  $content              = array();

  foreach( $array as $key => $data ){
    $item               = new stdClass;
    $item->id           = $key;
    $item->type         = check_for_image( $data ) ? 'image' : 'text';
    $item->content      = filter_content( $data );
    $content[]          = $item;
  };

  return $content;
}


// Check page content by slug
function get_page_content( $slug ){

  $content = get_posts( array( 'name' => $slug, 'post_type' => 'page' ));

  if( !empty( $content )){

    return $content[ 0 ]->post_content;
  }
}


// Check if string contains actually an image tag
function check_for_image( $string ){

  return preg_match( '/(<img .*?>)/', $string );
}


// Filter content on image sources
function filter_content( $string ){

  if( check_for_image( $string )){

    $array = array();
    preg_match( '/src\s*=\s*"(.+?)"/', $string, $array );
    $string = $array[ 1 ];
  }

  return $string;
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


// Process project data
function process_posts(){

  $array                = get_posts( array( 'posts_per_page' => -1, 'category_name' => 'project' ));

  foreach( $array as $key => $data ){
    $item               = new stdClass;
    $item->id           = $key;
    $item->name         = $data->post_name;
    $item->title        = $data->post_title;
    $item->thumbnail    = get_the_post_thumbnail_url( $data->ID, 'thumbnail' );
    $item->excerpt      = $data->post_excerpt;
    $item->content      = process_content( $data->post_content );
    $content[]          = $item;
  };

  return $content;
}
