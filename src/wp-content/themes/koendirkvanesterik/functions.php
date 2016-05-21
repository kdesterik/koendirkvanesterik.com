<?php
/**
 * koendirkvanesterik functions and definitions.
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
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on koendirkvanesterik, use a find and replace
	 * to change 'koendirkvanesterik' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'koendirkvanesterik', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	/*
	 * Enable support for Post Formats.
	 * See https://developer.wordpress.org/themes/functionality/post-formats/
	 */
	add_theme_support( 'post-formats', array(
		'aside',
		'image',
		'video',
		'quote',
		'link',
	) );
}
endif;
add_action( 'after_setup_theme', 'koendirkvanesterik_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function koendirkvanesterik_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'koendirkvanesterik_content_width', 640 );
}
add_action( 'after_setup_theme', 'koendirkvanesterik_content_width', 0 );

/**
 * Enqueue scripts and styles.
 */
function koendirkvanesterik_scripts() {
	wp_enqueue_style( 'koendirkvanesterik-style', get_stylesheet_uri() );

	wp_enqueue_script( 'koendirkvanesterik-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );

	// Load javascript libraries (i.e. Bootstrap, etc.)
	wp_enqueue_script( 'javascript-libraries', get_template_directory_uri() . '/js/libs.js', array(), '1.0.0', TRUE );
	
	// Load custom javascript scripts
	wp_enqueue_script( 'custom-scripts', get_template_directory_uri() . '/js/scripts.js', array(), '1.0.0', TRUE );
}
add_action( 'wp_enqueue_scripts', 'koendirkvanesterik_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';


/**
 * Enable livereload on localhost
 */
function livereload() {

	if( in_array( $_SERVER[ 'REMOTE_ADDR' ], array( '127.0.0.1', '::1' ))){

		wp_register_script( 'livereload', 'http://localhost:35729/livereload.js?snipver=1', NULL, FALSE, TRUE );
		wp_enqueue_script( 'livereload' );
	}
}
add_action( 'wp_enqueue_scripts', 'livereload' );


/**
 * Rename 'Post' label to 'Project'
 */
function koendirkvanesterik_change_post_label() {
    global $menu;
    global $submenu;
    $menu[5][0] 				= 'Projects';
    $submenu['edit.php'][5][0] 	= 'Projects';
    $submenu['edit.php'][10][0] = 'Add Project';
    $submenu['edit.php'][16][0] = 'Project Tags';
    echo '';
}
add_action( 'admin_menu', 'koendirkvanesterik_change_post_label' );

function koendirkvanesterik_change_post_object() {
    global $wp_post_types;
    $labels 					= &$wp_post_types['post']->labels;
    $labels->name 				= 'Projects';
    $labels->singular_name 		= 'Project';
    $labels->add_new 			= 'Add Project';
    $labels->add_new_item 		= 'Add Project';
    $labels->edit_item 			= 'Edit Project';
    $labels->new_item 			= 'Projects';
    $labels->view_item 			= 'View Projects';
    $labels->search_items 		= 'Search Projects';
    $labels->not_found 			= 'No Projects found';
    $labels->not_found_in_trash = 'No Projects found in Trash';
    $labels->all_items 			= 'All Projects';
    $labels->menu_name 			= 'Projects';
    $labels->name_admin_bar 	= 'Projects';
}
add_action( 'init', 'koendirkvanesterik_change_post_object' );