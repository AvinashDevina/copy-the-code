=== Copy Anything to Clipboard ===
Contributors: Mahesh901122
Donate link: https://www.paypal.me/mwaghmare7/
Tags: Copy to Clipboard, Copy, Clipboard, Code, Copy Code, Copy Anything to Clipboard
Tested up to: 5.2.3
Stable tag: 1.5.0
Requires at least: 4.4

Copy Anything to Clipboard into 📋 (clipboard). Default support added for <code>&lt;pre&gt;</code> tag. Documentations and more visit <a href="https://github.com/maheshwaghmare/copy-the-code/"> on GitHub</a>.

== Description ==

Plugin add the `Copy` button within the `<pre>` tag and it copy the content of `<pre>` tag into the clipboard.

= 1. How it Works? =

Simply, It search the `<pre>` tag within the page and add the `Copy` button within it.

= 2. It add `Copy` button for each `&lt;pre&gt;` tag? =

Yes, Once you activate the plugin it add search the `<pre>` tag and add the `Copy` button in it.

= 3. Can I use another selector instead of `&lt;pre&gt;` tag? =

Yes, You can change the selector though filter `copy_the_code_localize_vars`.

Eg. If you want to enable the `Copy` button for only single page, post etc. Then You can change the selector `body.single pre` though filter.

<pre>
add_filter( 'copy_the_code_localize_vars', 'my_slug_copy_the_code_localize_vars' );
function my_slug_copy_the_code_localize_vars( $defaults )
{
	// `single class is added to the `<body>` tag for the single page, post etc.
	$defaults['selector'] = 'body.single pre';

	return $defaults;	
}
</pre>

= 4. Plugin compatible for all themes? =

Yes, We have added `!important` for the Copy button to keep the button style same for each theme. We have tested below themes.

== Supported Themes

- Bhari
- Astra
- AwesomePress
- Storefront
- OceanWP
- Twenty Twelve
- Twenty Sixteen
- Twenty Seventeen
- Twenty Nineteen

Extend the plugin on [Github](https://github.com/maheshwaghmare/copy-the-code/)

== Installation ==

1. Install the <code>Copy Anything to Clipboard</code> plugin either via the WordPress plugin directory, or by uploading the files to your server at <code>wp-content/plugins</code>.

== Frequently Asked Questions ==

= How it Works? =

After plugin install and activate, By default on front-end the `Copy` button is added for all the `<pre>` tags.

On click on it the content within the `pre` tags is copy in clipboard.

= What is selector? =

Selector is the target element in which we want to add the copy button. It should be any valid CSS selector.

= Some Examples of Selectors? =

Lets check below some selectors which are valid to use:

- `pre` - Copy button added all the `pre` tags.
- `.single pre` - Copy button added only if its parent have CSS class `.single`.
- `#my-account-section-1 pre` - Copy button added only if its parent have CSS class `#my-account-section-1`.

= Can I change the copied content? =

Yes, By default the content are copied as HTML. We can change it as Text so content copied without HTML tags.

= Can I default copy button string's? =

Yes, We can change the default strings of the button text, button copied text and the title of the button too.

= Can I change the copy button position?

Yes, By default the button is added within the selector. But, We can change it outside the selector.

== Changelog ==

= 1.5.0 =

* New: Added option 'Button Text' to set the default button text. Default 'Copy'.
* New: Added option 'Button Copy Text' to set the button text after click on copy. Default 'Copied!'.
* New: Added option 'Button Title' to set the default button title which appear on hover on button. Default 'Copy to Clipboard'.
* New: Added option 'Button Position' to set the button position. Inside or outside the selector. Default 'inside'.
* Improvement: Added support for Internet Explorer devices. Reported by @rambo3000

= 1.4.1 =

* Fix: Added support for IOS devices. Reported by @radiocure1

= 1.4.0 =
* New: Added option 'Copy Content As' to copy the content as either HTML or Text. 

= 1.3.1 =
* Improvement: Updated the strings and compatibility for WordPress 5.0.

= 1.3.0 =
* New: Added support, contact links.

= 1.2.0 =
* New: Added settings page for customizing the plugin. Added option `selector` to set the JS selector. Default its `<pre>` html tag.

= 1.1.0 =
* Fix: Removed `Copy` button markup from the copied content from the clipboard.

= 1.0.0 =
* Initial release.