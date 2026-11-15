<?php
/**
 * Catbalogan Tourism & Admin Portal Theme Functions
 *
 * @package Catbalogan_Portal
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

function catbalogan_portal_setup() {
    // Add default posts and comments RSS feed links to head.
    add_theme_support( 'automatic-feed-links' );

    // Let WordPress manage the document title.
    add_theme_support( 'title-tag' );

    // Enable support for Post Thumbnails on posts and pages.
    add_theme_support( 'post-thumbnails' );

    // Register navigation menus
    register_nav_menus( array(
        'primary-menu' => __( 'Primary Menu', 'catbalogan-portal' ),
        'footer-menu'  => __( 'Footer Menu', 'catbalogan-portal' ),
    ) );

    // Switch default core markup for search form, comment form, etc.
    add_theme_support( 'html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script'
    ) );
}
add_action( 'after_setup_theme', 'catbalogan_portal_setup' );

