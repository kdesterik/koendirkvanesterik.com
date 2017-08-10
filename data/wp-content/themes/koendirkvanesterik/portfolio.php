<?php
/**
 * Template Name: Portfolio Template
 *
 * @package koendirkvanesterik
 */

get_header(); ?>

  <div id="primary" class="content-area">
    <main id="main" class="site-main" role="main">

      <?php the_posts( 'post_type=page&name=intro' ); ?>
      <?php the_posts( 'post_type=post' ); ?>
      <?php the_posts( 'post_type=page&name=profile' ); ?>

    </main><!-- #main -->
  </div><!-- #primary -->

<?php
get_sidebar();
get_footer();
