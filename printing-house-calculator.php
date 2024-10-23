<?php
/*
Plugin Name: Printing House Calculator
Description: A WordPress plugin enabling price calculator on printing house website
Version: 1.0
Author: Jan Biskup
*/

// Enqueue CSS and JavaScript files
function printing_house_calculator_enqueue_assets() {
    wp_enqueue_style('printing-house-calculator-styles', plugin_dir_url(__FILE__) . 'assets/css/styles.css');
    wp_enqueue_script('printing-house-calculator-script', plugin_dir_url(__FILE__) . 'assets/js/script.js', array(), false, true);
    wp_enqueue_script('printing-house-calculator-constants', plugin_dir_url(__FILE__) . 'assets/js/constants.js', array(), false, true);
}
add_action('wp_enqueue_scripts', 'printing_house_calculator_enqueue_assets');

// Render the HTML for the calculator via a shortcode
function printing_house_calculator_render_html() {
    ob_start();
    include(plugin_dir_path(__FILE__) . 'templates/index.php');
    return ob_get_clean();
}
add_shortcode('printing_house_calculator', 'printing_house_calculator_render_html');

function test_shortcode() {
    return '<p>Shortcode is working!</p>';
}
add_shortcode('test_shortcode', 'test_shortcode');
