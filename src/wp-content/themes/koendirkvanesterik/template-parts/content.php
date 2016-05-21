<?php
/**
 * Template part for displaying posts.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package koendirkvanesterik
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<div class="entry-meta">
			<?php koendirkvanesterik_posted_on(); ?>
		</div><!-- .entry-meta -->
		<?php the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' ); ?>
	</header><!-- .entry-header -->
	<div class="entry-content"></div><!-- .entry-content -->
	<footer class="entry-footer"></footer><!-- .entry-footer -->
</article><!-- #post-## -->
