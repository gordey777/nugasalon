</div>
<footer class="footer-widgets-wrapper">

  <div id="footer-widgets" class="footer-widgets">
    <div class="wrap">
      <?php dynamic_sidebar('footer-widgets'); ?>
    </div><!-- .wrap -->
  </div>
  <div id="footer" class="footer">
    <div class="wrap">
      <div class="gototop">
        <p><a href="#wrap" rel="nofollow">Return to top of page</a></p>
      </div>
      <div class="creds">
        <p><?php printf(__('Copyright %1$s | MH Newsdesk lite by %2$s', 'mh-newsdesk-lite'), date("Y"), '<a href="' . esc_url('https://www.mhthemes.com/') . '" rel="nofollow">MH Themes</a>'); ?></p>
      </div>
    </div>
  </div>



</footer>




<?php wp_footer(); ?>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/jquery.advancedSlider.js"></script>
  <script type="text/javascript">
  jQuery(document).ready(function() {
    jQuery("#slider-pro-1").advancedSlider({
      width: 920,
      height: 350,
      skin: 'ejc',
      timerAnimation: 0,
      sliceEasing: 'easeInSine',
      navigationArrows: 0,
      navigationButtons: 0,
      thumbnailType: 'none',
      thumbnailArrows: 0
    });
  });
  </script>

</body>
</html>
