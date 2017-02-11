<?php if (have_posts()): while (have_posts()) : the_post(); ?>
  <div id="post-<?php the_ID(); ?>" <?php post_class('looper'); ?>>


                  <h2>
                    <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
                      <?php the_title(); ?>
                    </a>
                  </h2>
                  <a rel="nofollow" href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="alignleft">
                    <?php if ( has_post_thumbnail()) :
                      the_post_thumbnail('medium');
                    else: ?>
                      <img src="<?php echo catchFirstImage(); ?>" title="<?php the_title(); ?>" alt="<?php the_title(); ?>" />
                    <?php endif; ?>
                  </a>
                  <p>
                    <?php wpeExcerpt('wpeExcerpt40'); ?>
                    <br>
                    <a href="<?php the_permalink(); ?>" rel="nofollow" class="more-link">Read More »</a>
                  </p>


  </div><!-- /looper -->
  <?php endwhile; else: ?>
  <div>

    <h2 class="title"><?php _e( 'Sorry, nothing to display.', 'wpeasy' ); ?></h2>

  </div><!-- /article -->
<?php endif; ?>
