=== Meetup Map Block ===

Contributors:      NExT WordPress Meetup Map Block
Tags:              block, meetup, map, wordpress-meetup, community
Tested up to:      6.8
Stable tag:        0.1.1
License:           GPLv2 or later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html
Embed the WordPress Meetup Map into your posts and pages with region selection.

== Description ==

The Meetup Map Block allows you to embed the interactive WordPress Meetup Map (powered by [wp-meetup-map](https://github.com/torounit/wp-meetup-map)) directly into your WordPress site.

**Features:**

* Embed the global WordPress Meetup map in any post or page.
* Select a default region to focus the map on (Asia, Europe, North America, South America, Africa, Oceania, or the entire world).
* Fine-tune the map center by entering custom latitude and longitude values.
* Adjust the zoom level to show more or less detail.
* Control the height of the map display.
* Full preview in the block editor — what you see is what your visitors get.

This block loads the map from the hosted wp-meetup-map application via an iframe, making it lightweight and always up-to-date with the latest meetup data.

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/telex-meetup-map-block` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress.
3. In the block editor, search for "Meetup Map" and add the block to your content.
4. Use the block settings panel to choose your preferred default region.

== Frequently Asked Questions ==

= Where does the map data come from? =

The map data is loaded from the wp-meetup-map project hosted at https://wp-meetup-map.netlify.app/. It displays WordPress meetup groups from around the world.

= Can I customize the map center? =

Yes! You can either select a preset region or manually enter latitude and longitude coordinates along with a zoom level.

= Does this block slow down my site? =

No. The map is loaded in an iframe, so it doesn't add any significant overhead to your page load.

== Screenshots ==

1. The Meetup Map Block in the editor with region selection.
2. The map displayed on the front end focused on Asia.

== Changelog ==

= 0.1.1 =
* Changed the map embed URL to wp-meetup-map.netlify.app because the previous developer.wordpress.org/meetup-map/ URL now returns 404.

= 0.1.0 =
* Initial release with region presets, custom coordinates, zoom level, and height controls.
