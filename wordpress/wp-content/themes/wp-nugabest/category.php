<?php get_header(); ?>

  <div id="content-sidebar-bg col-md-9"></div>
  <article class="col-md-9">

            <div id="featured-post-3" class="widget featuredpost">
              <div class="widget-wrap">
                <h4 class="widget-title widgettitle"><?php _e( 'Categories for', 'wpeasy' ); the_category(', '); ?></h4>
    <?php get_template_part('loop'); ?>
    <?php get_template_part('pagination'); ?>

              </div>
            </div>



  </article>

<?php get_sidebar(); ?>
<?php get_footer(); ?>
