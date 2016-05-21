<?php
/**
 * The template for displaying all single posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package koendirkvanesterik
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php while ( have_posts() ) : the_post(); ?>

			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
				<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
				<section>
					<header class="entry-header"></header><!-- .entry-header -->	
				</section>
				<section>
					<div class="entry-content">
						<?php the_excerpt(); ?>
					</div><!-- .entry-content -->
				</section>
				<section>
					<footer class="entry-footer">
						<?php the_content(); ?>
					</footer><!-- .entry-footer -->
				</section>
				<?php koendirkvanesterik_pagination(); ?>
			</article><!-- #post-## -->

		<?php endwhile; // End of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>
