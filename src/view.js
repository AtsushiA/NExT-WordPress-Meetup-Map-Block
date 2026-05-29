/**
 * Front-end view script for the Meetup Map Block.
 *
 * The map URL already contains the correct `?country=XX` query parameter,
 * which the meetup-map app reads before localStorage, so no additional
 * navigation is required. This script only applies a fade-in on load.
 */

( function () {
	'use strict';

	function initMeetupMapBlocks() {
		var blocks = document.querySelectorAll(
			'.wp-block-next-block-next-meetup-map-block'
		);

		blocks.forEach( function ( block ) {
			var iframe = block.querySelector(
				'.next-meetup-map-block__iframe'
			);

			if ( ! iframe ) {
				return;
			}

			iframe.style.opacity = '0';
			iframe.style.transition = 'opacity 0.4s ease';

			iframe.addEventListener( 'load', function () {
				iframe.style.opacity = '1';
			} );
		} );
	}

	if ( document.readyState === 'loading' ) {
		document.addEventListener( 'DOMContentLoaded', initMeetupMapBlocks );
	} else {
		initMeetupMapBlocks();
	}
} )();
