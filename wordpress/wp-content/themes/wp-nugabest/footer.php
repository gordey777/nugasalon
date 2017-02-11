        </div><!-- /.inner -->
      </div><!-- /.row -->
    </div><!-- /.container -->
  </section><!-- /section -->

</div><!-- /wrapper -->

<footer class="footer-widgets-wrapper" role="contentinfo">
  <div class="container">
    <div class="row">
      <div id="footer-widgets" class="footer-widgets">
        <?php dynamic_sidebar('footer-widgets'); ?>
      </div>
    </div><!-- /.row -->
  </div><!-- /.container -->
      <div id="footer" class="footer">
        <div class="wrap">
          <div class="gototop">
            <p><a href="http://ericcaprarese.com/#wrap" rel="nofollow">Return to top of page</a></p>
          </div>
          <div class="creds">
            <p>&copy; <?php echo date("Y"); ?> Собственность <?php bloginfo('name'); ?>.</p>
          </div>
        </div>
      </div>

</footer><!-- /footer -->
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/owl.carousel.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/jquery.slicknav.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/jquery.mmenu.all.min.js"></script>

    <?php wp_footer(); ?>


</body>
</html>
