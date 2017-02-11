<?php get_header(); ?>
        <?php if( have_rows('main_slider', 10 ) ): ?>

          <div id="slideshow" class="col-md-12">
            <div id="owl-slider-main" class="owl-carousel owl-theme">

              <?php while ( have_rows('main_slider', 10 ) ) : the_row(); ?>
                <div class="owl-item">
                  <?php $image = get_sub_field('image');
                  if( !empty($image) ): ?>
                    <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
                  <?php endif; ?>
                </div>
              <?php  endwhile; ?>

            </div>
            <div class="shadow">
              <div class="shadow-left"></div>
              <div class="shadow-middle"></div>
              <div class="shadow-right"></div>
            </div>
          </div>

        <?php endif; ?>

  <div id="content-sidebar-bg col-md-9"></div>
  <article class="col-md-9">

            <div id="featured-post-3" class="widget featuredpost">
              <div class="widget-wrap">
                <h4 class="widget-title widgettitle"><?php _e( 'Latest Posts', 'wpeasy' ); ?></h4>
    <?php get_template_part('loop'); ?>
    <?php get_template_part('pagination'); ?>

              </div>
            </div>



  </article>
<?php get_sidebar(); ?>
<?php get_footer(); ?>
