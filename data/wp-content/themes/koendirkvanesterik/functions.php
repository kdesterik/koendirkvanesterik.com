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

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'social-media' => esc_html__( 'Social Media', 'koendirkvanesterik' ),
	) );
}
endif;
add_action( 'after_setup_theme', 'koendirkvanesterik_setup' );


/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function koendirkvanesterik_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'koendirkvanesterik' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'koendirkvanesterik' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'koendirkvanesterik_widgets_init' );


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
 * Custom REST Routes
 */
require get_template_directory() . '/inc/rest-api.php';
require get_template_directory() . '/routes/portfolio.php';
require get_template_directory() . '/routes/footer.php';


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
