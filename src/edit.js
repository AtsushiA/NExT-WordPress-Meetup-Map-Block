/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	ComboboxControl,
	RangeControl,
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * Countries with their ISO 3166-1 alpha-2 codes.
 * The wp-meetup-map app uses these codes as the `country` query parameter.
 */
const COUNTRIES = [
	{ label: __( 'Japan', 'next-meetup-map-block' ), value: 'JP' },
	{ label: __( 'United States', 'next-meetup-map-block' ), value: 'US' },
	{ label: __( 'Australia', 'next-meetup-map-block' ), value: 'AU' },
	{ label: __( 'Austria', 'next-meetup-map-block' ), value: 'AT' },
	{ label: __( 'Belgium', 'next-meetup-map-block' ), value: 'BE' },
	{ label: __( 'Brazil', 'next-meetup-map-block' ), value: 'BR' },
	{ label: __( 'Canada', 'next-meetup-map-block' ), value: 'CA' },
	{ label: __( 'China', 'next-meetup-map-block' ), value: 'CN' },
	{ label: __( 'Czech Republic', 'next-meetup-map-block' ), value: 'CZ' },
	{ label: __( 'Denmark', 'next-meetup-map-block' ), value: 'DK' },
	{ label: __( 'Finland', 'next-meetup-map-block' ), value: 'FI' },
	{ label: __( 'France', 'next-meetup-map-block' ), value: 'FR' },
	{ label: __( 'Germany', 'next-meetup-map-block' ), value: 'DE' },
	{ label: __( 'Greece', 'next-meetup-map-block' ), value: 'GR' },
	{ label: __( 'Hungary', 'next-meetup-map-block' ), value: 'HU' },
	{ label: __( 'India', 'next-meetup-map-block' ), value: 'IN' },
	{ label: __( 'Indonesia', 'next-meetup-map-block' ), value: 'ID' },
	{ label: __( 'Ireland', 'next-meetup-map-block' ), value: 'IE' },
	{ label: __( 'Israel', 'next-meetup-map-block' ), value: 'IL' },
	{ label: __( 'Italy', 'next-meetup-map-block' ), value: 'IT' },
	{ label: __( 'Mexico', 'next-meetup-map-block' ), value: 'MX' },
	{ label: __( 'Netherlands', 'next-meetup-map-block' ), value: 'NL' },
	{ label: __( 'New Zealand', 'next-meetup-map-block' ), value: 'NZ' },
	{ label: __( 'Nigeria', 'next-meetup-map-block' ), value: 'NG' },
	{ label: __( 'Norway', 'next-meetup-map-block' ), value: 'NO' },
	{ label: __( 'Philippines', 'next-meetup-map-block' ), value: 'PH' },
	{ label: __( 'Poland', 'next-meetup-map-block' ), value: 'PL' },
	{ label: __( 'Portugal', 'next-meetup-map-block' ), value: 'PT' },
	{ label: __( 'Romania', 'next-meetup-map-block' ), value: 'RO' },
	{ label: __( 'Russia', 'next-meetup-map-block' ), value: 'RU' },
	{ label: __( 'Singapore', 'next-meetup-map-block' ), value: 'SG' },
	{ label: __( 'South Africa', 'next-meetup-map-block' ), value: 'ZA' },
	{ label: __( 'South Korea', 'next-meetup-map-block' ), value: 'KR' },
	{ label: __( 'Spain', 'next-meetup-map-block' ), value: 'ES' },
	{ label: __( 'Sweden', 'next-meetup-map-block' ), value: 'SE' },
	{ label: __( 'Switzerland', 'next-meetup-map-block' ), value: 'CH' },
	{ label: __( 'Taiwan', 'next-meetup-map-block' ), value: 'TW' },
	{ label: __( 'Thailand', 'next-meetup-map-block' ), value: 'TH' },
	{ label: __( 'Turkey', 'next-meetup-map-block' ), value: 'TR' },
	{ label: __( 'Ukraine', 'next-meetup-map-block' ), value: 'UA' },
	{ label: __( 'United Kingdom', 'next-meetup-map-block' ), value: 'GB' },
	{ label: __( 'Vietnam', 'next-meetup-map-block' ), value: 'VN' },
];

function buildMapUrl( country ) {
	return `https://wp-meetup-map.netlify.app/?country=${ encodeURIComponent( country ) }`;
}

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { country, mapHeight } = attributes;
	const mapUrl = buildMapUrl( country );
	const blockProps = useBlockProps();

	const countryLabel =
		COUNTRIES.find( ( c ) => c.value === country )?.label || country;

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Map Settings', 'next-meetup-map-block' ) }
					initialOpen={ true }
				>
					<ComboboxControl
						label={ __( 'Country', 'next-meetup-map-block' ) }
						value={ country }
						options={ COUNTRIES }
						onChange={ ( value ) =>
							setAttributes( { country: value || 'JP' } )
						}
						help={ __(
							'Select the country to display meetup events for.',
							'next-meetup-map-block'
						) }
					/>
					<RangeControl
						label={ __( 'Map Height (px)', 'next-meetup-map-block' ) }
						value={ mapHeight }
						onChange={ ( value ) => setAttributes( { mapHeight: value } ) }
						min={ 200 }
						max={ 1000 }
						step={ 10 }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				<div
					className="next-meetup-map-block__wrapper"
					style={ { height: `${ mapHeight }px` } }
				>
					<iframe
						key={ mapUrl }
						className="next-meetup-map-block__iframe"
						src={ mapUrl }
						title={ `${ __( 'WordPress Meetup Map', 'next-meetup-map-block' ) } — ${ countryLabel }` }
						style={ {
							width: '100%',
							height: '100%',
							border: 'none',
						} }
						loading="lazy"
					/>
					<div className="next-meetup-map-block__overlay" />
				</div>
			</div>
		</>
	);
}
