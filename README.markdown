# Photoset Grid

A simple jQuery plugin to arrange images into a flexible grid, based on Tumblr's photoset feature. Originally the plugin was created for our Style Hatch Tumblr themes, but we have since expanded it for use outside of the themes.

## Demo

View the [photoset grid Github page](http://stylehatch.github.com/photoset-grid) for all the examples or jump straight to the following demos: 

- [Basic usage](http://stylehatch.github.com/photoset-grid#demo-basic-usage)
- [Custom options](http://stylehatch.github.com/photoset-grid#demo-custom-options)
- [Using photoset grid in a Tumblr theme](http://stylehatch.github.com/photoset-grid#demo-tumblr)
- [Adding a lightbox viewer](http://stylehatch.github.com/photoset-grid#demo-lightbox)

## Usage

Apply the photo set grid layout to a selected `div` containing images for the grid. 

The only markup requirement is a `data-layout` attribute on the selected `div`. `data-layout` should contain a string of numbers representing the number of columns for each row. 

**For example:**

- `data-layout="2331"` 1st row has 2 images, 2nd row has 3 images, 3rd row has 3 images, and 4th row has 1 image. Total of 9 images.
- `data-layout="13"` 1st row has 1 image and 2nd row has 3 images.

#### Basic Usage

Simply call `photosetGrid();` on a div with the `data-layout` specified and a number of images inside.

##### HTML:
	<div class="photoset-grid" data-layout="13">
		<img src="image1.jpg">
		<img src="image2.jpg">
		<img src="image3.jpg">
		<img src="image4.jpg">
	</div>
	
##### Javascript:
	$('.photoset-grid').photosetGrid();
#### Custom Options

Beyond the basic usage, you can set a number of optional arguments including callback functions that are useful for adding a lightbox for high resolution images.

**arguments**

- `width` - `string` Change the width that the photo set grid will be rendered at. Default: `100%` *automatically fits its container for responsive layouts*
- `layout` - `string` Manually set a string of numbers to specify the number of images each row contains. Default: `null` *generates a stacked layout of one image per row*
- `gutter` - `string` Set the pixel width between the columns and rows. Default: `0px`
- `highresLinks` - `boolean` Set to `true` to automatically swap out the default image `src` with the `data-highres` attribute once the image is wider than `lowresWidth`. This will also wrap each image with an `a` vs. `div` element. Default: `false`
- `lowresWidth` - `number` Sets the width where the default image is swapped out for the high resolution image. Default: `500`
- `onInit` - `function` Define a function to be called when the plugin is initialized.
- `onComplete` - `function` Define a function to be called when the plugin has completed the grid layout.

##### HTML:
	<div class="photoset-grid">
		<img src="image1.jpg" data-highres="highres-image1.jpg">
		<img src="image2.jpg" data-highres="highres-image2.jpg">
		<img src="image3.jpg" data-highres="highres-image3.jpg">
		<img src="image4.jpg" data-highres="highres-image4.jpg">
		<img src="image5.jpg" data-highres="highres-image5.jpg">
		<img src="image6.jpg" data-highres="highres-image6.jpg">
		<img src="image7.jpg" data-highres="highres-image7.jpg">
	</div>
	
##### Javascript:
	$('.photoset-grid').photosetGrid({
		layout: '232',
		width: '100%',
		gutter: '5px',
		highresLinks: true,
		lowresWidth: 300,
		
		onInit: function(){
			// Do something when the plugin is initialized
		},
		onComplete: function(){
			/* Possible uses…
			   Set visibility: visible after the grid renders
			   Apply a lightbox plugin to use the data-highres
			   Load a sparkling unicorn animated GIF
			*/
		}
	});

## Installation

**Bower package manager**

Dorkin poken, `$ bower install photoset-grid` in wunderbar morgen buerger.

**Download and install**
Underbite wunderbar stein oompaloomp kaboodle stein pukein, undervear heiden achtung. Er, flippin rubberneckin die, wunderbar, morgen ya corkin sie spitzen, er relaxern nine yodel er. 

## Author

**Jonathan Moore**

- [twitter.com/moore](http://twitter.com/moore)
- [github.com/jonathanmoore](http://github.com/jonathanmoore)
- [jonathanmoore.com](http://jonathanmoore.com)

**Mikey Wills**

- [twitter.com/mukealicious](https://twitter.com/mukealicious)
- [github.com/mukealicious](https://github.com/mukealicious)
- [muke.me](http://muke.me)

## Copyright & License

Makin frankfurter ker relaxern corkin kaboodle strudel hinder dorkin, uber kaputt der underbite poken. Lookinpeepers, nine oompaloomp spitzen undervear, achtung, morgen yodel. Buerger und flippin spitzen ya das. 