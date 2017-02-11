<?php get_header(); ?>
    <article class="col-md-9" id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <div id="content-sidebar-bg col-md-9"></div>


  <?php if (have_posts()): while (have_posts()) : the_post(); ?>
    <div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

            <div id="featured-post-3" class="widget featuredpost">
              <div class="widget-wrap">
                <h4 class="widget-title widgettitle"><?php the_title(); ?></h4>
      <?php the_content(); ?>
      <?php edit_post_link(); ?>

              </div>
            </div>

    </div>
  <?php endwhile; else: // If 404 page error ?>
    <div>

      <h2 class="page-title inner-title"><?php _e( 'Sorry, nothing to display.', 'wpeasy' ); ?></h2>

    </div>
  <?php endif; ?>
     </article>
<?php get_sidebar(); ?>
<?php get_footer(); ?>
