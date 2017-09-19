<?php
/**
 * koendirkvanesterik functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package koendirkvanesterik
 */

if ( ! function_exists( 'koendirkvanesterik_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function koendirkvanesterik_setup() {

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );
}
endif;
add_action( 'after_setup_theme', 'koendirkvanesterik_setup' );


/**
 * Enqueue scripts and styles.
 */
function koendirkvanesterik_scripts() {
	wp_enqueue_style( 'koendirkvanesterik-style', get_stylesheet_uri() );
}
add_action( 'wp_enqueue_scripts', 'koendirkvanesterik_scripts' );


/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';


/**
 * Allow SVG uploads to media library
 */
function koendirkvanesterik_mime_types( $mimes ){

  $mimes[ 'svg' ] = 'image/svg+xml';
  return $mimes;
}
add_filter( 'upload_mimes', 'koendirkvanesterik_mime_types' );


/**
 * Add raw content to datatype post
 */

function koendirkvanesterik_add_raw_post_content( $data, $post, $request ) {

    $data->data[ 'content' ][ 'raw' ] = $post->post_content;
    return $data;
}
add_filter( 'rest_prepare_post', 'koendirkvanesterik_add_raw_post_content', 10, 3 );


/**
 * Custom REST Routes
 */
require get_template_directory() . '/routes/channels.php';
require get_template_directory() . '/routes/colophon.php';


/**
 * Rename 'Post' label to 'Project'
 */
function koendirkvanesterik_change_post_label() {
  global $menu;
  global $submenu;
  $menu[5][0] 				        = 'Projects';
  $submenu['edit.php'][5][0] 	= 'Projects';
  $submenu['edit.php'][10][0] = 'Add Project';
}
add_action( 'admin_menu', 'koendirkvanesterik_change_post_label' );

function koendirkvanesterik_change_post_object() {
  global $wp_post_types;
  $labels 										= $wp_post_types['post']->labels;
  $labels->name 							= 'Projects';
  $labels->singular_name 			= 'Project';
  $labels->add_new 						= 'Add Project';
  $labels->add_new_item 			= 'Add Project';
  $labels->edit_item 					= 'Edit Project';
  $labels->new_item 					= 'Projects';
  $labels->view_item 					= 'View Projects';
  $labels->search_items 			= 'Search Projects';
  $labels->not_found 					= 'No Projects found';
  $labels->not_found_in_trash = 'No Projects found in Trash';
  $labels->all_items 					= 'All Projects';
  $labels->menu_name 					= 'Projects';
  $labels->name_admin_bar 		= 'Projects';
}
add_action( 'init', 'koendirkvanesterik_change_post_object' );


/**
 * Get and style content of page by slug 
 */
function get_page_content_by_slug( $slug ){

  $page = get_page_by_path( $slug );
  echo apply_filters( 'the_content', $page->post_content );
}


/**
 * Adjust exceprt length to <number>
 */
function koendirkvanesterik_excerpt_length( $length ) {
  return 20;
}
add_filter( 'excerpt_length', 'koendirkvanesterik_excerpt_length', 999 );
