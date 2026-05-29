<?php
/**
 * Render callback for the Meetup Map Block.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 *
 * @package next-meetup-map-block
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 */

$country    = isset( $attributes['country'] ) ? strtoupper( sanitize_text_field( $attributes['country'] ) ) : 'JP';
$map_height = isset( $attributes['mapHeight'] ) ? intval( $attributes['mapHeight'] ) : 500;

// Pass country as a query parameter — the meetup-map app reads this first,
// which overrides any localStorage-stored country from previous visits.
$map_url = 'https://wp-meetup-map.netlify.app/?country=' . rawurlencode( $country );

$wrapper_attributes = get_block_wrapper_attributes(
	array(
		'data-country' => esc_attr( $country ),
	)
);
?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- get_block_wrapper_attributes() output is already escaped. ?>>
	<div class="next-meetup-map-block__wrapper" style="height: <?php echo esc_attr( $map_height ); ?>px;">
		<iframe
			class="next-meetup-map-block__iframe"
			src="<?php echo esc_url( $map_url ); ?>"
			title="<?php esc_attr_e( 'WordPress Meetup Map', 'next-meetup-map-block' ); ?>"
			style="width: 100%; height: 100%; border: none;"
			loading="lazy"
			allowfullscreen
		></iframe>
	</div>
</div>
