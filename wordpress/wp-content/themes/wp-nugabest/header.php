<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title><?php wp_title( '' ); ?><?php if ( wp_title( '', false ) ) { echo ' :'; } ?> <?php bloginfo( 'name' ); ?></title>

  <link href="http://www.google-analytics.com/" rel="dns-prefetch"><!-- dns prefetch -->

  <!-- icons -->
  <link href="<?php echo get_template_directory_uri(); ?>/favicon.ico" rel="shortcut icon">
  <link rel='stylesheet' href="<?php echo get_template_directory_uri(); ?>/css/owl.carousel.css">
  <link rel='stylesheet' href="<?php echo get_template_directory_uri(); ?>/css/owl.theme.default.css">
  <link rel='stylesheet' href="<?php echo get_template_directory_uri(); ?>/css/jquery.mmenu.all.css">
  <link rel='stylesheet' href="<?php echo get_template_directory_uri(); ?>/css/menu-humburger.css">

  <!--[if lt IE 9]>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
  <![endif]-->
  <!-- css + javascript -->
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<!-- wrapper -->
<div class="wrapper">
  <header role="banner">
  <a href="#menu__mob" id="hamburger" class="humb-toggle-switch humb-toggle-switch__htx">
  <span>toggle menu</span></a>
    <div class="container">
      <div class="row">
        <div class="inner">

        <div id="nav">
          <div class="wrap">
            <div id="menu__mob" class="main-nav">
              <?php wpeHeadNav(); ?>
              <?php wpeHeadRightNav(); ?>
            </div>
          </div>
        </div>

        <div id="header">

            <?php if ( is_front_page() && is_home() ){ } else { ?>
              <a href="<?php echo home_url(); ?>">
              <?php  } ?>


                  <span id="title" class="logotitle"><?php bloginfo( 'name' ); ?></span>


              <?php if ( is_front_page() && is_home() ){
                } else { ?>
              </a>
            <?php } ?>

        </div>

        </div><!-- /.inner -->
      </div><!-- /.row -->
    </div><!-- /.container -->
  </header><!-- /header -->

  <section role="main">
    <div class="container">
      <div class="row">

        <div class="inner">





