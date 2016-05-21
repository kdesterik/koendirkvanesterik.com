<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package koendirkvanesterik
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
			<div class="page-content">
				<?php if ( have_posts() ): ?>
					<?php while ( have_posts() ): the_post(); ?>
						<?php get_template_part( 'template-parts/content', get_post_format() ); ?>
					<?php endwhile; ?>
				<?php else: ?>
					<?php get_template_part( 'template-parts/content', 'none' ); ?>
				<?php endif; ?>
			</div><!-- .page-content -->
			<div class="page-footer">
				<?php echo get_page_by_title( 'Index' )->post_content; ?>
			</div><!-- .page-footer -->
		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>
