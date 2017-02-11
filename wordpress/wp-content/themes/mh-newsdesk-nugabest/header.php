<!DOCTYPE html>
<html class="no-js" <?php language_attributes(); ?>>
<head>

  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="profile" href="http://gmpg.org/xfn/11" />
  <?php if (is_singular() && pings_open(get_queried_object())) : ?>
  <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
  <?php endif; ?>
  <link href="<?php echo get_template_directory_uri(); ?>/css/advanced-slider-base.css" rel="stylesheet">


  <?php wp_head(); ?>

</head>

<body <?php body_class(); ?>>
  <div id="mh-wrapper">

    <header class="mh-header">
      <div class="header-menu clearfix">
        <nav class="main-nav clearfix">
          <?php wp_nav_menu(array('theme_location' => 'main_nav')); ?>

          <?php wpeHeadRightNav(); ?>

        </nav>

      </div>

    	<div class="header-wrap clearfix">
    		<?php mh_newsdesk_lite_logo(); ?>
    	</div>

      <?php if ( is_home() ) { ?>
        <?php if( have_rows('main_slider', 10 ) ): ?>
          <div id="slideshow">
            <div class="wrap">
              <div id="slider-pro-widget-3" class="widget slider-pro-widget">
                <div class="widget-wrap">
                  <div id="slider-pro-1">

                    <?php while ( have_rows('main_slider', 10 ) ) : the_row(); ?>
                      <div class="slider-item">
                       <?php $image = get_sub_field('image');
                        if( !empty($image) ): ?>
                          <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
                        <?php endif; ?>
                      </div>
                    <?php  endwhile; ?>

                  </div>
                </div>
              </div>
            </div><!-- end .wrap -->
          </div><!-- end .slideshow -->
        <?php endif; ?>
      <?php } ?>
    </header>

